import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
      default:
        "../upload/pngtree-character-default-avatar-png-image_5407167.jpg",
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }], // Danh sách mã đặt tour liên kết đến các tour mà người dùng đã đặt 

  
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
