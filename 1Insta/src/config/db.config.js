import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connected successfully");
    } catch(error){
        console.log("There is an error connecting with database", error);
    }
}

export default mongoDBConnect;
