
// khuyến mãi và giảm giá
import mongoose, {Schema} from "mongoose";
const PromotionSchema = new Schema({
  tourID: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, //Mã tour liên kết nếu có
  discount: { type: Number, required: true }, // Mức giảm giá (phần trăm hoặc số tiền)
  startDate: { type: Date, required: true }, //Ngày bắt đầu khuyến mãi
  endDate: { type: Date, required: true }, //Ngày kết thúc khuyến mã
  description: { type: String }, //Mô tả chi tiết khuyến mãi
});

export default mongoose.model("Promotion", PromotionSchema);
