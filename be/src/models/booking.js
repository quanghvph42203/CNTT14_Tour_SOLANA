// Quản lý thông tin đặt chỗ của người dùng cho các tour.

import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, //Mã người dùng đặt tour
    tourID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    }, //Mã tour
    bookingDate: { type: Date, default: Date.now }, //Ngày đặt
    status: {
      type: String,
      enum: ["confirmed", "cancelled", "pending", "paid"],
      default: "pending",
    }, // Trạng thái đặt tour (đã xác nhận, hủy, chờ thanh toán, đã thanh toán)
    totalAmount: { type: Number, required: true }, //Tổng số tiền
    numberOfPeople: { type: Number, required: true }, //Số lượng người tham gia
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Booking", bookingSchema);
