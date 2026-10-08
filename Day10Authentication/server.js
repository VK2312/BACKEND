import app from './src/app/app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("server is listening on Port 3000");
});