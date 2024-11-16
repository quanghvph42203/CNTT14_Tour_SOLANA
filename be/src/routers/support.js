// routers/support.js
import express from "express";
import {
  getAllSupportRequests,
  sendSupportRequest,
  updateSupportRequestStatus,
} from "./../controllers/support";

const router = express.Router();

router.get("/support", getAllSupportRequests);
router.post("/support", sendSupportRequest);
router.put("/support/:id", updateSupportRequestStatus);

export default router;
