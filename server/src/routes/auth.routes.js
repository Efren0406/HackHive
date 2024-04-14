import { Router } from "express";
import { postUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", postUser);

export default router;
