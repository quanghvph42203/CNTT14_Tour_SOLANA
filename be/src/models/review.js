//Lưu đánh giá và phản hồi của người dùng về các tour.
import mongoose, {Schema} from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    tourID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    }, //Mã tour được đánh giá
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, //Mã người đánh giá
    rating: { type: Number, min: 1, max: 5, required: true }, // Điểm đánh giá (1-5 sao)
    comment: { type: String }, //Bình luận đánh giá
    reviewDate: { type: Date, default: Date.now }, //Ngày đánh giá
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Review", reviewSchema);
