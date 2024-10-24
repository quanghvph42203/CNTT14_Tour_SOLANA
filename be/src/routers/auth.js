import express from 'express';
const router = express.Router();

import { signup } from '../controllers/auth';
import { signin } from "../controllers/auth";

router.post('/auth/signup',signup )
router.post("/auth/signin", signin);

export default router;