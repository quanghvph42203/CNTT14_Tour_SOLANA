import express from "express";
import {
  
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
