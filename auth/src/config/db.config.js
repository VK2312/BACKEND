import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo db connected successfully");
    } catch (error) {
        console.log("there is an error while connecting with database", error)
    }
}

export default mongoDBConnect;