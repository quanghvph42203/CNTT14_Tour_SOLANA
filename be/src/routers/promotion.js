import {Router} from "express"
import { createPromotion, deletePromotion, getActivePromotions, getAllPromotions, getPromotionById, updatePromotion } from "../controllers/promotion";
const router = Router();

router.post("/promotion", createPromotion);
router.get("/getPromotions", getAllPromotions);
router.get("/getPromotion/:id", getPromotionById);
router.put("/updatePromotion/:id", updatePromotion);
router.delete("/deletePromotion/:id", deletePromotion);
router.get("/getPromotions/active", getActivePromotions);

export default router;
