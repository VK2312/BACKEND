import express from 'express';
import upload from '../config/multer.js';
import {createPostController, getAllPostController} from '../controllers/instaControllers.js'

const router = express.Router();

router.post("/create", upload.single("image"), createPostController);

router.get("/getPost", getAllPostController);

export default router;