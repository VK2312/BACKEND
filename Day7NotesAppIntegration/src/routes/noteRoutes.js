import express from "express";
import {getAllNotesController, createNotesController, deleteNotesController, updateNotesController} from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/allNotes", getAllNotesController);

router.post("/create", createNotesController);

router.delete("/:id", deleteNotesController);

router.put("/:id", updateNotesController);

export default router;