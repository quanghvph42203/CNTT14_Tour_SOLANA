import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Tạo người dùng mới
export const createUser = async (req, res) => {
  const { name, email, password, role, avatar } = req.body;

  try {
    // Kiểm tra nếu email đã tồn tại
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email đã tồn tại." });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo người dùng mới
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      avatar,
    });

    await user.save();
    res.status(201).json({ message: "Người dùng đã được tạo thành công.", user });
  } catch (error) {
    res.status(500).json({ message: "Không thể tạo người dùng.", error: error.message });
  }
};

// Lấy thông tin người dùng
export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Không thể lấy thông tin người dùng.", error: error.message });
  }
};

// Lấy danh sách người dùng
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Không thể lấy danh sách người dùng.", error: error.message });
  }
};

// Cập nhật thông tin người dùng
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role, avatar, password } = req.body;

  try {
    // Kiểm tra người dùng tồn tại
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng." });
    }

    // Cập nhật thông tin
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    user.avatar = avatar || user.avatar;

    // Nếu có mật khẩu mới, mã hóa và cập nhật
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();
    res.status(200).json({ message: "Thông tin người dùng đã được cập nhật.", user });
  } catch (error) {
    res.status(500).json({ message: "Không thể cập nhật người dùng.", error: error.message });
  }
};

// Xóa người dùng
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng." });
    }

    res.status(200).json({ message: "Người dùng đã được xóa thành công." });
  } catch (error) {
    res.status(500).json({ message: "Không thể xóa người dùng.", error: error.message });
  }
};
