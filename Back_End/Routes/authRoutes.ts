import express from "express";
import { login, register } from "../controllers/authentication";

const router = express.Router();

router.post("/login",login);
router.post("/register",register);
// router.post("/forget");

export default router;
