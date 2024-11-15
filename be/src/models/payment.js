import mongoose, {Schema} from "mongoose";
const PaymentSchema = new Schema({
  bookingID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  }, //Mã đặt tour liên kết đến
  amount: { type: Number, required: true }, // Số tiền thanh toán
  paymentDate: { type: Date, default: Date.now }, //Ngày thanh toán
  status: {
    type: String,
    enum: ["success", "failed", "processing"],
    default: "processing",
  }, //Trạng thái thanh toán (thành công, thất bại, đang xử lý)
  method: { type: String, required: true }, //Phương thức thanh toán (thẻ tín dụng, chuyển khoản, ví điện tử)
});

export default mongoose.model("Payment", PaymentSchema);
