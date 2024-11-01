import { Router } from "express";
import { addToCart, createCart, deleteCart, getCart, updateCart } from "../controllers/cart";

const router = Router();
// Tạo giỏ hàng cho người dùng
router.post("/create", createCart);

// Thêm sản phẩm vào giỏ hàng
router.post("/add", addToCart);

// Lấy thông tin giỏ hàng của người dùng
router.get("/get/:userId", getCart);

// Cập nhật giỏ hàng của người dùng
router.put("/update/:userId", updateCart);

// Xóa giỏ hàng của người dùng
router.delete("/delete/:userId", deleteCart);
export default router