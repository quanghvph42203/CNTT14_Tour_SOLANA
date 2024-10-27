
import express from "express";
const router = express.Router();

import { signup } from "../controllers/auth";
import { signin } from "../controllers/auth";
import { logout } from "./../controllers/auth";

router.post("/auth/signup", signup);
router.post("/auth/signin", signin);
router.post("/auth/logOut", logout);

export default router;

