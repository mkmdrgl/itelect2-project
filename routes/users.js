import express from "express";
import { listUsers } from "../controllers/authController.js";

const router = express.Router();

router.get("/", listUsers);   // public

export default router;