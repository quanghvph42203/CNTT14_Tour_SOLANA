import {Router} from "express";
import { createPayment, deletePayment, getAllPayments, getPaymentById, getPaymentsByStatus, updatePayment } from "../controllers/payment";
const router = Router();

router.post("/payment", createPayment);
router.get("/getPayment", getAllPayments);
router.get("/getPayment/:paymentId", getPaymentById);
router.put("/updatePayment/:paymentId", updatePayment);
router.delete("/deletePayment/:paymentId", deletePayment);
router.get("/getPayments/status", getPaymentsByStatus); 

export default router;
