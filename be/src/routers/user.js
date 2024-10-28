import express from "express";
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/getusers", getUsers);
router.get("/getusers/:id", getUser);
router.put("/updateusers/:id", updateUser);
router.delete("/deleteusers/:id", deleteUser);

export default router;
