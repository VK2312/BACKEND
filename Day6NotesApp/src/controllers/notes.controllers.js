const NotesModel = require("../models/note.model");

//GET ALL NOTES
const getAllNotesController = async (req, res) => {
    try {
        const allNotes = await NotesModel.find();

        res.status(200).json({
            message: "All Notes fetched",
            data:allNotes,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}


//CREATE NOTES CONTROLLER
const createNotesController = async (req, res) => {
    try {
        let {title, description} = req.body;

        let newNote = await NotesModel.create({
            title,
            description,
        });

        return res.status(201).json({
            message:"Note created successfully",
            data: newNote,
        });
    } catch (error) {
        console.log("error in creation", error);
    }
}


//DELETE NOTES CONTROLLER
const deleteNotesController = async (req, res) => {
    try {
        let noteID = req.params.id;
        let singleNote = await NotesModel.findByIdAndDelete(noteID);

        res.status(200).json({
            message:"Note deleted successfully",
            data:singleNote,
        });
    } catch (error) {
        return res.status(500).json({
            message:"Interval Server Error",
        });
    }
}


//UPDATE NOTES CONTROLLER
const updateNotesController = async (req, res) => {
    try {
        let noteID = req.params.id;
        let noteBody = req.body;

        let updatedNote = await NotesModel.findByIdAndUpdate(noteID, noteBody,{
            returnDocument:"after",
        });

        return res.status(200).json({
            message: "notes updated successfully",
            data:updatedNote,
        });
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
        });
    }
}


//UPDATE SINGLE NOTES CONTROLLER
const updateSingleNotesController = async (req, res) => {
    try {
        let noteID = req.params.id;
        let noteBody = req.body;

        let updatedNote = await NotesModel.findByIdAndUpdate(noteID, noteBody, {returnDocument : "after"});
        return res.status(200).json({
            message:"updated by using patch",
            data: updatedNote,
        })


    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}


module.exports = {getAllNotesController,createNotesController, deleteNotesController, updateNotesController, updateSingleNotesController}