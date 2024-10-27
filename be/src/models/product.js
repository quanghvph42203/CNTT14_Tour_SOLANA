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
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    category: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: Number,
      required: true,
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
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
