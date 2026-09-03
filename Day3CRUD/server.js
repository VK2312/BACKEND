const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let mobiles = [];

app.get("/", (req, res) => {
    res.send(mobiles);
})

app.post("/create", (req, res) => {
    const body = req.body;
    mobiles.push(body);
    res.send(mobiles);
})

app.delete("/delete/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let updatedMobile = mobiles.filter((val) => val.id !== id)
    mobiles = updatedMobile;
    res.send(updatedMobile);
})


app.put("/update/:id", (req, res) => {
    // res.send("Update hone wala hai");

    let {id} = req.params;
    let {mobile, price} = req.body;

    let updatedMobileData = mobiles.map((val) => val.id === id ? {...val, mobile, price} : val);
    mobiles = updatedMobileData;
    res.send(updatedMobileData);
})

app.listen(port, (req, res) => {
    console.log(`App is listening on ${port}`);
})