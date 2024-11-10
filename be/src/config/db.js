import mongoose from "mongoose";

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("Kết nối db thành công");
    } catch (error) {
        console.log(error);
    }
};
