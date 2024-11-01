// import mongoose from "mongoose";

// // Mô hình Order
// const orderSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User", // Liên kết với mô hình User
//   },
//   tourId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "Tour", // Liên kết với mô hình Tour
//   },
//   orderNumber: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   customerName: {
//     type: String,
//     required: true,
//   },
//   numberOfPeople: {
//     type: Number,
//     required: true,
//     min: 1, // Ít nhất phải đặt một người
//   },
//   totalPrice: {
//     type: Number,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "confirmed", "cancelled", "completed"],
//     default: "pending",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Hàm để sinh orderNumber
// const generateOrderNumber = () => {
//   const timestamp = Date.now().toString();
//   const random = Math.floor(Math.random() * 1000)
//     .toString()
//     .padStart(3, "0");
//   return `${timestamp}-${random}`;
// };

// // Pre-save hook để sinh orderNumber trước khi lưu vào cơ sở dữ liệu
// orderSchema.pre("save", function (next) {
//   if (!this.orderNumber) {
//     this.orderNumber = generateOrderNumber();
//   }
//   next();
// });

// export default mongoose.models.Order || mongoose.model("Order", orderSchema);
