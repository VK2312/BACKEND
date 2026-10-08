import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGOURI = process.env.MONGOURI;
console.log(MONGOURI);

const dbConnect = async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log("database connected successfully");
    } catch (error) {
        console.log("there is an error while connecting with database", error);
    }
}

export default dbConnect;