import Notification from "../models/notification"; // import model Notification
import mongoose from "mongoose";

// Tạo mới notification
export const createNotification = async (req, res) => {
  const { userID, message, type } = req.body;

  try {
    // Kiểm tra xem userID có hợp lệ không
    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const newNotification = new Notification({
      userID,
      message,
      type,
    });

    await newNotification.save();

    res.status(201).json({
      message: "Notification created successfully",
      notification: newNotification,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả thông báo của người dùng
export const getAllNotifications = async (req, res) => {
  const { userID } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const notifications = await Notification.find({ userID }).sort({
      createdAt: -1,
    }); // Sắp xếp theo thời gian, mới nhất trước

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông báo theo ID
export const getNotificationById = async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await Notification.findById(id);

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật trạng thái thông báo (đánh dấu đã đọc)
export const markNotificationAsRead = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      id,
      { readStatus: true },
      { new: true }
    );

    if (!updatedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json({
      message: "Notification marked as read",
      notification: updatedNotification,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa notification theo ID
export const deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNotification = await Notification.findByIdAndDelete(
      id
    );

    if (!deletedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};











