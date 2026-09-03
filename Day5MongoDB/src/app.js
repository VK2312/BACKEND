const express = require("express");
const connectDb = require("./config/db");
const noteModel = require("./model/note.Model");

const app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
    res.send("I am working brother");
})

app.post("/create", async (req, res) => {
    let {title, description} = req.body;

    const newNote = await noteModel.create({
        title,
        description,
    });

    res.send({
        success:true,
        message:"Note creted successfully",
        data: newNote,
    });
});

module.exports = app;