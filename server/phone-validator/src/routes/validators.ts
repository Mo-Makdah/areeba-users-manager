import express from "express";
import { validatePhoneNumber } from "../controllers/validators";

const router = express.Router();

router.get("/phone", validatePhoneNumber);

export default router;
