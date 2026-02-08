const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var userH = parseFloat(req.body.height);
    var userW = parseFloat(req.body.weight);
    var result = userW / (userH * userH);

    res.send("<h1>BMI Result</h1><h2>Your Height: " + userH +"</h2><h2>Your Weight: " + userW + "</h2><p>The result of your BMI is: "+ result + "!</p>");
});


app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
