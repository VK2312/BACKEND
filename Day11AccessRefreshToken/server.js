import app from './src/app.js';
import config from './src/config/config.js';
import dbConnect from './src/config/db.js';

await dbConnect();

app.listen(config.PORT, () => {
    console.log("server is listening on port 3000");
})