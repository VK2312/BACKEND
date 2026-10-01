import express from 'express'
import uploadController from '../controller/multerController.js'

const router = express.Router();

router.post("/", uploadController)

export default router;