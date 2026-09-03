const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDb = async () => {
    try {
    await mongoose.connect(process.env.URI);
    console.log("MongoDB Connected");
    } catch (error) {
        console("Error is occured", error);
    }
}


module.exports = connectDb;