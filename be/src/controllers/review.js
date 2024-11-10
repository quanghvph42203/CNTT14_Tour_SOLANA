import Review from "../models/review"; // import model Review
import mongoose from "mongoose";

// Tạo mới đánh giá
export const createReview = async (req, res) => {
  const { tourID, userID, rating, comment } = req.body;

  try {
    // Kiểm tra xem tourID và userID có hợp lệ không
    if (
      !mongoose.Types.ObjectId.isValid(tourID) ||
      !mongoose.Types.ObjectId.isValid(userID)
    ) {
      return res.status(400).json({ message: "Invalid tour ID or user ID" });
    }

    // Tạo mới đánh giá
    const newReview = new Review({
      tourID,
      userID,
      rating,
      comment,
    });

    await newReview.save();

    res.status(201).json({
      message: "Review created successfully",
      review: newReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả đánh giá của một tour
export const getReviewsByTour = async (req, res) => {
  const { tourID } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(tourID)) {
      return res.status(400).json({ message: "Invalid tour ID" });
    }

    const reviews = await Review.find({ tourID })
      .populate("userID", "name email") // Populates thông tin người dùng đã đánh giá
      .sort({ reviewDate: -1 }); // Sắp xếp theo ngày đánh giá mới nhất

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả đánh giá của một người dùng
export const getReviewsByUser = async (req, res) => {
  const { userID } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const reviews = await Review.find({ userID })
      .populate("tourID", "name description") // Populates thông tin tour đã được đánh giá
      .sort({ reviewDate: -1 }); // Sắp xếp theo ngày đánh giá mới nhất

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy một đánh giá theo ID
export const getReviewById = async (req, res) => {
  const { reviewId } = req.params;

  try {
    const review = await Review.findById(reviewId)
      .populate("userID", "name email")
      .populate("tourID", "name description");

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật đánh giá
export const updateReview = async (req, res) => {
  const { reviewId } = req.params;
  const { rating, comment } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { rating, comment },
      { new: true }
    )
      .populate("userID", "name email")
      .populate("tourID", "name description");

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({
      message: "Review updated successfully",
      review: updatedReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa đánh giá theo ID
export const deleteReview = async (req, res) => {
  const { reviewId } = req.params;

  try {
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy điểm trung bình đánh giá của một tour
export const getAverageRatingByTour = async (req, res) => {
  const { tourID } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(tourID)) {
      return res.status(400).json({ message: "Invalid tour ID" });
    }

    const reviews = await Review.find({ tourID });

    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this tour" });
    }

    // Tính điểm trung bình
    const averageRating =
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

    res.status(200).json({ averageRating });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
