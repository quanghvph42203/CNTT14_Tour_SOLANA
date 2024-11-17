import express from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routers/auth";
import productRouter from "./routers/product";
import userRouter from "./routers/user.js";
import bookingRoutes from "./routers/booking.js";
import paymentRoutes from "./routers/payment.js";
import reviewRoutes from "./routers/review.js";
import promotionRoutes from "./routers/promotion.js";
import destinationRoutes from "./routers/destination.js"
import notificationRoutes from "./routers/notification.js"
import countryRoutes from "./routers/country.js"
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
app.use("/api", bookingRoutes);
app.use("/api", paymentRoutes);
app.use("/api", reviewRoutes);
app.use("/api", promotionRoutes);
app.use("/api", destinationRoutes);
app.use("/api", notificationRoutes);
app.use("/api",countryRoutes);
// app.use("/api", sendMailRoutes);
export const viteNodeApp = app;
