import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3, "Name must be atleast 3 characters long "],
        maxLength:[50, "Name must be atmost 50 characters long"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please provide a valid email address"]
    },
    passwordHash:{
        type:String,
    },
    refreshToken:{
        type:String,
    }

});

const userAuthModel = mongoose.model("user", userSchema);

export default userAuthModel;