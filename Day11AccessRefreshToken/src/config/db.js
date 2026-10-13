import mongoose from 'mongoose';
import config from './config.js';

const dbConnect = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("database connected successfully");
    } catch (error) {
        console.log("There is an error while connecting with database", error);
    }
}

export default dbConnect;
