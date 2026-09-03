const app = require("./src/app");

const port = 3000;

// app.use(express.json());

app.listen(port, () => {
    console.log("app is listening on port 3000");
})

