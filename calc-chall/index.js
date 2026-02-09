const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1 + n2;

    res.send("<h1>Thanks for submitting</h1><br />The result of adding " + n1 + " & " + n2 + " is: " + result);
    console.log(req.body.num1);
});

app.listen("3000", function() {
    console.log("Server is running on port 3000.");
});


