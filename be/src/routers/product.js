import { Router } from "express";
import {
  create,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  related,
} from "../controllers/product";

const router = Router();

// Routes for products
router.get(`/products`, getAllProducts); // Get all products with pagination
router.post(`/products/add`, create); // Create a new product
router.get(`/products/:id`, getProductById); // Get product by ID
router.delete(`/products/:id`, deleteProductById); // Delete product by ID
router.put(`/products/:id`, updateProductById); // Update product by ID
router.get(`/products/related/:categoryId/:productId`, related); // Get related products

export default router;
