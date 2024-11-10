import { Router } from "express";
import { createBooking, deleteBooking, getAllBookings, getBookingById, getBookingsByStatus, updateBooking } from "../controllers/booking";
const router = Router();


router.post("/booking", createBooking);
router.get("/getBookings", getAllBookings);
router.get("/getBooking/:id", getBookingById);
router.put("/updateBooking/:id", updateBooking);
router.delete("/deleteBooking/:id", deleteBooking);
router.get("/Bookings/status", getBookingsByStatus);

export default router
