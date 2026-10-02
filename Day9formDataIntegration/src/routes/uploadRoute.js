import express from 'express';
import upload from '../config/multer.js';
import uploadController from '../controllers/uploadController.js';
import cors from 'cors';


const router = express.Router();

router.post("/", cors(), upload.array("images"), uploadController);

export default router;