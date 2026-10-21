import express from 'express';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("App get is running");
});

//ROUTES 
app.use("/api/auth", authRoutes);

export default app;