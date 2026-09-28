import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URI = process.env.MONGOURI;


const dbConnect = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log("There is an error while connecting with DB", error);
    }
}

export default dbConnect;