let http = require("http");

let server = http.createServer( (req, res) => {
    console.log("hello I am Server");
    res.end("Mai sunn rha huu");
} );

server.listen(8000, () => {
    console.log("Server is listening on Port 3000");
})

// console.log("server started");
