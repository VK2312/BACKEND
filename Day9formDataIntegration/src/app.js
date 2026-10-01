import express from 'express';
import router from './routes/uploadRoute.js';
import cors from 'cors';

const app = express();

app.use("/uploads", router);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("app wala default chal rha hai");
    res.status(200).json({
        message:"yeah app is running"
    });
});


export default app;