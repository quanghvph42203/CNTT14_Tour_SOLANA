import mongoose, {Schema} from "mongoose";
const blogSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  bannerImage: { type: String},
  sections: [
    {
      heading: { type: String  },
      content: { type: String },
      images: [{ url: String, caption: String }],
    },
  ],
  recommendations: [{ type: String }],
});

export default mongoose.model("Blog", blogSchema);


