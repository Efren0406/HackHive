import { Router } from "express";
import { getItems } from "../controllers/inventory.controller.js";

const router = Router();

router.get("/items", getItems);

export default router;
