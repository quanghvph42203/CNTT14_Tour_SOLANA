import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routers/auth";
import productRouter from "./routers/product";
import dotenv from "dotenv";
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
dotenv.config();
// connect database
connectDB("mongodb+srv://havietquangk4:LKWPkXbC7KERroYi@cluster0.9xjiq.mongodb.net/tuor");
// routers

app.use("/api", authRouter);
app.use("/api", productRouter);

export const viteNodeApp = app;
