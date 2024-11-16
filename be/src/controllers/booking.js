import Booking from "../models/Booking"; // import model Booking
import mongoose from "mongoose";

// Tạo mới booking
export const createBooking = async (req, res) => {
  const { userID, tourID, totalAmount, numberOfPeople } = req.body;

  try {
    // Kiểm tra xem userID và tourID có tồn tại trong DB không
    if (
      !mongoose.Types.ObjectId.isValid(userID) ||
      !mongoose.Types.ObjectId.isValid(tourID)
    ) {
      return res.status(400).json({ message: "Invalid user ID or tour ID" });
    }

    const newBooking = new Booking({
      userID,
      tourID,
      totalAmount,
      numberOfPeople,
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin tất cả booking
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userID", "name email") // Populating user data (name, email)
      .populate("tourID", "name description"); // Populating tour data (name, description)

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin booking theo ID
export const getBookingById = async (req, res) => {
  const { id } = req.params;

  // Kiểm tra xem ID có hợp lệ không
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid booking ID" });
  }

  try {
    const booking = await Booking.findById(id)
      .populate("userID", "name email")
      .populate("tourID", "name description");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Cập nhật thông tin booking
export const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { status, totalAmount, numberOfPeople } = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status, totalAmount, numberOfPeople },
      { new: true }
    )
      .populate("userID", "name email")
      .populate("tourID", "name description");

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({
      message: "Booking updated successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa booking theo ID
export const deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lọc booking theo trạng thái
export const getBookingsByStatus = async (req, res) => {
  const { status } = req.query; // Lấy giá trị status từ query parameter

  // Nếu không có status trong query, trả về lỗi
  if (!status) {
    return res
      .status(400)
      .json({ message: "Status query parameter is required" });
  }

  try {
    // Lọc các booking theo status
    const bookings = await Booking.find({ status })
      .populate("userID", "name email") // Lấy thông tin người dùng
      .populate("tourID", "name description"); // Lấy thông tin tour

    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found with this status" });
    }

    res.status(200).json(bookings); // Trả về kết quả
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
