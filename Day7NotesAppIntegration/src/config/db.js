import mongoose  from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const URI = process.env.MONGOURI

const dbConnect = async () => {
    try {
        await mongoose.connect(URI);
        console.log("mongo db connected successfully");
    } catch (error) {
        console.log("Error in connecting with MONGODB", error)
    }
}

export default dbConnect;