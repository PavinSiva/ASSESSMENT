import express from "express";
import { getDashboardStock } from "../controllers/stock.controller.js";

const router = express.Router();

router.get("/dashboard", getDashboardStock);

export default router;