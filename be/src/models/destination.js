import mongoose, {Schema} from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number], // [longitude, latitude]
  },
  tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], //Danh sách các tour liên quan đến điểm đến này
});

destinationSchema.index({ location: "2dsphere" }); // For geospatial queries

export default mongoose.model("Destination", destinationSchema);
