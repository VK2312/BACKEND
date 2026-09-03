import express from 'express';
import mongoDBConnect from './config/db.config.js';
import instaRouter from './routes/post.routes.js';

mongoDBConnect();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Okay i got it");
})

app.use("/insta", instaRouter);

export default app;