import express from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routers/auth";
import productRouter from "./routers/product";
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect database
connectDB("mongodb://localhost:27017/tuor");
// routers

app.use("/api", authRouter);
app.use("/api", productRouter);
export const viteNodeApp = app;
