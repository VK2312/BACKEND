const express = require("express");
const {getAllNotesController, createNotesController, updateNotesController,deleteNotesController, updateSingleNotesController} = require("../controllers/notes.controllers");
const router = express.Router();


//TO GET ALL NOTES
router.get("/allNotes", getAllNotesController)

// CREATE
router.post("/create", createNotesController)

//DELETE
router.delete("/:id", deleteNotesController);

//UPDATE WHOLE BODY
router.put("/:id", updateNotesController);

//UPDATE SINGLE ENTITY IN NOTES
router.patch("/:id", updateSingleNotesController);


module.exports = router;