import { Router } from "express";
import {createReview,deleteReview,getAverageRatingByTour,getReviewById,getReviewsByTour, getReviewsByUser, updateReview } from "../controllers/review"
const router = Router();

router.post("/review", createReview);
router.get("/getReviews/tour/:tourID", getReviewsByTour);
router.get("/getReviews/user/:userID", getReviewsByUser);
router.get("/getReview/:reviewId", getReviewById);
router.put("/updateReview/:reviewId", updateReview);
router.delete("/deleteReview/:reviewId", deleteReview);
router.get("/reviews/average/:tourID", getAverageRatingByTour);


export default router
