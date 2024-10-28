import express from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routers/auth";
import productRouter from "./routers/product";
import userRouter from "./routers/user.js";
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect database
connectDB(
  "mongodb+srv://havietquangk4:LKWPkXbC7KERroYi@cluster0.9xjiq.mongodb.net/tuor"
);
// routers

app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", userRouter);
export const viteNodeApp = app;
