import Payment from "../models/Payment"; // import model Payment
import mongoose from "mongoose";

// Tạo mới payment
export const createPayment = async (req, res) => {
  const { bookingID, amount, method } = req.body;

  try {
    // Kiểm tra xem bookingID có tồn tại trong DB không
    if (!mongoose.Types.ObjectId.isValid(bookingID)) {
      return res.status(400).json({ message: "Invalid booking ID" });
    }

    const newPayment = new Payment({
      bookingID,
      amount,
      method,
    });

    await newPayment.save();

    res.status(201).json({
      message: "Payment created successfully",
      payment: newPayment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin tất cả payment
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate(
      "bookingID",
      "userID tourID status totalAmount"
    ); // Populate thông tin liên kết với Booking

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin payment theo ID
export const getPaymentById = async (req, res) => {
  const { paymentId } = req.params;

  try {
    const payment = await Payment.findById(paymentId).populate(
      "bookingID",
      "userID tourID status totalAmount"
    );

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin payment
export const updatePayment = async (req, res) => {
  const { paymentId } = req.params;
  const { status, amount } = req.body;

  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      paymentId,
      { status, amount },
      { new: true }
    ).populate("bookingID", "userID tourID status totalAmount");

    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({
      message: "Payment updated successfully",
      payment: updatedPayment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa payment theo ID
export const deletePayment = async (req, res) => {
  const { paymentId } = req.params;

  try {
    const deletedPayment = await Payment.findByIdAndDelete(paymentId);

    if (!deletedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lọc payment theo trạng thái
export const getPaymentsByStatus = async (req, res) => {
  const { status } = req.query;

  try {
    const payments = await Payment.find({ status }).populate(
      "bookingID",
      "userID tourID status totalAmount"
    );

    if (payments.length === 0) {
      return res
        .status(404)
        .json({ message: "No payments found with this status" });
    }

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
