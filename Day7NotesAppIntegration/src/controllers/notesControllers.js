import notesModel from "../models/notesModel.js";

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

export {getAllNotesController};