import mongoose, {Schema} from "mongoose";
const notificationSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  type: String,
  readStatus: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
}, {timestamps: true, versionKey: false});

export default mongoose.model("Notification", notificationSchema);
