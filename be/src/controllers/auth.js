import bcryptjs from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import jwt from "jsonwebtoken";
import User from "../models/user";
import BlacklistedToken from "../models/black-listed-token";

// Validation schema for signup
const signupSchema = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    "string.min": "Trường Name phải có ít nhất {#limit} ký tự",
    "string.max": "Trường Name không được vượt quá {#limit} ký tự",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Trường Email là bắt buộc",
    "string.empty": "Trường Email không được để trống",
    "string.email": "Trường Email phải là email hợp lệ",
  }),
  password: Joi.string().min(6).max(30).required().messages({
    "any.required": "Trường Password là bắt buộc",
    "string.empty": "Trường Password không được để trống",
    "string.min": "Trường Password phải có ít nhất {#limit} ký tự",
    "string.max": "Trường Password không được vượt quá {#limit} ký tự",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": "Trường Confirm Password là bắt buộc",
    "any.only": "Mật khẩu không trùng khớp",
  }),
  avatar: Joi.string().uri().messages({
    "string.uri": "Trường Avatar phải là đường dẫn hợp lệ",
  }),
});

// JWT token generators
const generateRefreshToken = (userId) =>
  jwt.sign({ userId }, "123456", { expiresIn: "7d" });
const generateAccessToken = (userId) =>
  jwt.sign({ userId }, "123456", { expiresIn: "15m" });

// Signup function
export const signup = async (req, res) => {
  const { email, password } = req.body;

  // Validate the signup request
  const { error } = signupSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((item) => item.message);
    return res.status(StatusCodes.BAD_REQUEST).json({ messages });
  }

  try {
    // Check if the user already exists
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        messages: ["Email đã tồn tại"],
      });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);
    // Set the user role, first user gets "admin"
    const role = (await User.countDocuments({})) === 0 ? "admin" : "user";

    // Create new user
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
      role,
    });

    return res.status(StatusCodes.CREATED).json({ user });
  } catch (error) {
    console.error("Error during signup:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

// Signin function
export const signin = async (req, res) => {
  const { email, password } = req.body;

  // Validate inputs: Check if both email and password are provided
  if (!email) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      messages: ["Trường Email là bắt buộc"],
    });
  }

  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      messages: ["Trường Mật khẩu là bắt buộc"],
    });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        messages: ["Email không tồn tại"],
      });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        messages: ["Mật khẩu không chính xác"],
      });
    }

    // Generate access and refresh tokens
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    return res.status(StatusCodes.OK).json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(`Error during signin for email ${email}:`, error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

// Logout function
export const logout = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "No token provided" });
    }

    // Add token to the blacklist
    const blacklistedToken = new BlacklistedToken({ token });
    await blacklistedToken.save();

    return res
      .status(StatusCodes.OK)
      .json({ message: "Successfully logged out" });
  } catch (error) {
    console.error("Error during logout:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

// Token refresh function
export const refreshToken = async (req, res) => {
  try {
    const oldToken = req.headers.authorization;
    if (!oldToken) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "No token provided" });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await isTokenBlacklisted(oldToken);
    if (isBlacklisted) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Token is blacklisted" });
    }

    // Decode the old token to get the userId
    let decoded;
    try {
      decoded = jwt.verify(oldToken, "123456");
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ error: "Token expired" });
      } else {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ error: "Invalid token" });
      }
    }

    const userId = decoded.userId;
    if (!userId) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Invalid token payload" });
    }

    // Generate a new refresh token
    const newToken = generateRefreshToken(userId);
    return res.status(StatusCodes.OK).json({ newToken });
  } catch (error) {
    console.error("Error during token refresh:", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

// Check if token is blacklisted
export const isTokenBlacklisted = async (token) => {
  const tokenInBlacklist = await BlacklistedToken.findOne({ token });
  return !!tokenInBlacklist;
};
