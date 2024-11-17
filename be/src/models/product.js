import { number } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },
    destination: { type: String }, //điểm đến
    slug: {
      type: String,

      index: true,
    },
    startDate: { type: Date },

    endDate: { type: Date },
    capacity: { type: Number }, //số lượng khách tối đa
    availability: { type: Number }, //số chỗ còn trống

    price: {
      type: Number,

      default: 0,
    },
    discount_price: {
      type: Number, // Discounted price for the product
      default: 0,
    },
    image: String,
    gallery: [String],
    description: {
      type: String, // Detailed description of the product
      required: false,
    },
    discount: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
    featured: Boolean,
    tags: [String],
    attributes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attribute",
      },
    ],
    location: {
      type: String, // Location of the product (e.g., where it’s sold or made)
      required: false,
    },
    image: {
      type: String,
      default:
        "../upload/pngtree-character-default-avatar-png-image_5407167.jpg",
    },

    status: {
      type: String,
      enum: ["available", "sold out"],
      default: "available",
    },
    country: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
      
      },
    ],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
