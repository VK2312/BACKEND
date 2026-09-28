import dbConnect from './src/config/db.js';
import app from './src/app.js';

const PORT = process.env.PORT;

// dbConnect();

app.listen(PORT, ()=> {
    console.log("Server is listening on port", PORT);
})