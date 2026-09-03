const mongoose = require('mongoose');

const connectDb = async () => {
    try {
    await mongoose.connect('mongodb+srv://vikashchaudhary2690_db_user:HY1Uo95UM1HFKsbF@mongodb.uxgflmx.mongodb.net/');
    console.log("MongoDB Connected");
    } catch (error) {
        console("Error is occured", error);
    }
}


module.exports = connectDb;