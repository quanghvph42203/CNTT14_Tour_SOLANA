import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog";

const router = express.Router();

// Lấy tất cả blog
router.get("/blogs", getAllBlogs);

// Lấy blog theo ID
router.get("/blogs/:id", getBlogById);

// Tạo blog mới
router.post("/addblog", createBlog);

// Cập nhật blog theo ID
router.put("/updateblogs/:id", updateBlog);

// Xóa blog theo ID
router.delete("/removeblogs/:id", deleteBlog);

export default router;
