const express = require("express");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.route");

const app = express();

connectDB();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Ok, I Got it");
})

app.use("/notes", notesRoute);

module.exports = app;
