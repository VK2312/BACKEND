import express, { Router } from "express";
import dbConnect from "./src/config/db.js";
import notesRoute from './src/routes/noteRoutes.js';

const app = express();

dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Okay i Notes running");
})

app.use("/notes", notesRoute);

export default app;