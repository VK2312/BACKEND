import express from "express";
import mongoDBConnect from "../config/db.config.js";
import authRoutes from "../routes/auth.routes.js";

const app = express();
app.use(express.json());

mongoDBConnect();


app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hey i am working")
});

export default app;