import notesModel from "../models/notesModel.js";

//GET ALL NOTES CONTROLLER
const getAllNotesController = async (req, res) => {
    try {
        const getNotes = await notesModel.find();
        res.status(200).json({
            message:"notes fetched successfully",
            data:getNotes,
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

//CREATE NOTES CONTROLLER
const createNotesController = async (req, res) => {
    try {
        let {title, description} = req.body;
        console.log(req.body);
        let newNote = await notesModel.create({
            title, 
            description,
        });

        return res.status(201).json({
            message:"Notes created successfully",
            data:newNote
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }

}

//DELETE NOTES CONTROLLER
const deleteNotesController = async (req, res) => {
    try{
        let noteId = req.params.id;
        console.log(noteId);
        let deleteNote = await notesModel.findByIdAndDelete(noteId);

        return res.status(200).json({
            message:"notesDeleted",
            data:deleteNote
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

//UPDATE NOTES CONTROLLER
const updateNotesController = async (req, res) => {
    try {
        let noteId = req.params.id;
        let noteBody = req.body;

        let updatedNote = await notesModel.findByIdAndUpdate(noteId, noteBody, {
            returnDocument:"after",
        });

        return res.status(200).json({
            message:"Notes updated successfully",
            data:updatedNote
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

export {getAllNotesController, createNotesController, deleteNotesController, updateNotesController};