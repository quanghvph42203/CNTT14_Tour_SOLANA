import Promotion from "../models/promotion"; // import model Promotion
import mongoose from "mongoose";

// Tạo mới promotion
export const createPromotion = async (req, res) => {
  const { tourID, discount, startDate, endDate, description } = req.body;

  try {
    const newPromotion = new Promotion({
      tourID,
      discount,
      startDate,
      endDate,
      description,
    });

    await newPromotion.save();

    res.status(201).json({
      message: "Promotion created successfully",
      promotion: newPromotion,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả các promotion
export const getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find().populate("tourID", "name price"); // Populate thông tin tour liên quan nếu có

    res.status(200).json(promotions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin promotion theo ID
export const getPromotionById = async (req, res) => {
  const { id } = req.params;

  try {
    const promotion = await Promotion.findById(id).populate(
      "tourID",
      "name price"
    );

    if (!promotion) {
      return res.status(404).json({ message: "Promotion not found" });
    }

    res.status(200).json(promotion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin promotion
export const updatePromotion = async (req, res) => {
  const { id } = req.params;
  const { tourID, discount, startDate, endDate, description } = req.body;

  try {
    const updatedPromotion = await Promotion.findByIdAndUpdate(
      id,
      { tourID, discount, startDate, endDate, description },
      { new: true }
    ).populate("tourID", "name price");

    if (!updatedPromotion) {
      return res.status(404).json({ message: "Promotion not found" });
    }

    res.status(200).json({
      message: "Promotion updated successfully",
      promotion: updatedPromotion,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa promotion theo ID
export const deletePromotion = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPromotion = await Promotion.findByIdAndDelete(id);

    if (!deletedPromotion) {
      return res.status(404).json({ message: "Promotion not found" });
    }

    res.status(200).json({ message: "Promotion deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lọc các promotion đang hoạt động
export const getActivePromotions = async (req, res) => {
  const currentDate = new Date();

  try {
    const activePromotions = await Promotion.find({
      startDate: { $lte: currentDate },
      endDate: { $gte: currentDate },
    }).populate("tourID", "name price");

    if (activePromotions.length === 0) {
      return res.status(404).json({ message: "No active promotions found" });
    }

    res.status(200).json(activePromotions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
