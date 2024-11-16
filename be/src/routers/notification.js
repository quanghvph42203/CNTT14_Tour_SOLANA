import express from "express";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  markNotificationAsRead,
  deleteNotification,
} from "../controllers/notification";

const router = express.Router();

router.post("/notification", createNotification);
router.get("/getNotifications/:userID", getAllNotifications);
router.get("/getnotification/:id", getNotificationById);
router.put("/notification/:id", markNotificationAsRead);
router.delete("/deleteNotification/:id", deleteNotification);

export default router;
