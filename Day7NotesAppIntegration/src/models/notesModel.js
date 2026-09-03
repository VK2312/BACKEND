import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        minLength:[20, "minimum 20 letters are required"]
    }
});

const notesModel = mongoose.model("notes", notesSchema);

export default notesModel;

