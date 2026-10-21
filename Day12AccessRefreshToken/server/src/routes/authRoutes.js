import express from 'express';
import {registerController, getMeController, refreshController} from '../controllers/authControllers.js';

const router = express.Router();

router.post("/register", registerController);
router.get("/me", getMeController);
router.post("/refresh", refreshController)

export default router;