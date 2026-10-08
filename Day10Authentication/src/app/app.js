import express from 'express';
import dbConnect from '../config/db.js';
import router from "../routes/authroutes.js";


const app = express();
app.use(express.json());
dbConnect();

app.get("/", (req, res) => {
    res.status(200).json({
        message:"request was receiving on server"
    });
});


app.use("/api/auth", router);

export default app;