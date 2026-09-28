import mongoose, { Schema } from 'mongoose';

const fileHandlingSchema = new mongoose.Schema({
    buffer:{
        type:String
    }
})

const fileHandlingModel = mongoose.model("fileHandle", fileHandlingSchema);

export default fileHandlingModel;