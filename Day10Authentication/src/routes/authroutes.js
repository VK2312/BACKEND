import express from "express";
import {registerController, userAuthenticationController} from "../controllers/authControllers.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/register", registerController);
router.get("/me", authenticate, userAuthenticationController);


export default router;

