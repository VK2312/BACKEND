import express, { Router } from "express";
import dbConnect from "./src/config/db.js";
import notesRoute from './src/routes/noteRoutes.js';
import cors from "cors";


const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
    origin:"http://localhost:5173",
    }),
);



app.get("/", (req, res) => {
    res.send("Okay i Notes running");
})

app.use("/notes", notesRoute);

export default app;