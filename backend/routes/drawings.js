import express from "express";
import { saveDrawing, getDrawing } from "../controllers/drawingController.js";

const router = express.Router();

router.post("/", saveDrawing);
router.get("/:id", getDrawing);

export default router;
