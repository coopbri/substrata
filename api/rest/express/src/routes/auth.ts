import express from "express";

import { authController } from "../controllers";

const router = express.Router();

// authentication routes
router.put("/register", authController.register);
router.post("/login", authController.login);

export default router;
