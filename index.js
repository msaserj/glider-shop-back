const express = require("express");
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// parse application json
app.use(express.json())
// parse application x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))
//images path
app.use("/static", express.static(__dirname + "/assets"))

const port = process.env.PORT || 5000;

app.use("/api/gliders", require("./routes/gliders"));

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017")
    .then(()=> {
        app.listen(port, ()=> {
            console.log("App is running on port " + port)
        })
    });


