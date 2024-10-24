import express from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// Connect to the database using the MONGO_URI from .env
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/tuor"; // Fallback for local development
connectDB(mongoURI);

// Routes setup
app.use("/api", authRouter);
app.use("/api", productRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
