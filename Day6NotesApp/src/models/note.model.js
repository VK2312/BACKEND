const { Schema, mongoose } = require("mongoose");


const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        minlength:[20, "Minimum 20 chars required"],
        required:true,
    }
});

const NotesModel = mongoose.model("notes", notesSchema)

module.exports = NotesModel;