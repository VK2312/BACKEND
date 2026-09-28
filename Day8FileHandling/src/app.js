import express from 'express';
import fileRoute from '../src/routes/file.routes.js';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running successfully");
})

app.use("/file", fileRoute);

export default app;