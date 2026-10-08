import mongoose, { Schema } from "mongoose";

const userAuthSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const userAuthModels = mongoose.model("userAuthModel", userAuthSchema);

export default userAuthModels;