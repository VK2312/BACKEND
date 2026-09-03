import express from "express";
import {getAllNotesController} from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/allNotes", getAllNotesController)

export default router;