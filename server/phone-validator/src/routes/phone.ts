import express from "express";
import { validatePhone } from "../controllers/phone";

const router = express.Router();

router.get("/phone", validatePhone);

export default router;
