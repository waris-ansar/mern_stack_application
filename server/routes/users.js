import express from "express";
import { signIn, signUp, getUser } from "../controllers/user.js";
const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.get("/:id", getUser);
export default router;