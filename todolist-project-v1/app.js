// || \\

const express = require("express");
const bodyParser = require("body-parser");
const dateModule = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const task = ["Prepare Food", "Cook Food", "Eat Food"];
const work = [];

app.get("/", function(req, res) {
    const day = dateModule.getDate();
    res.render("list", {listTitle: day, listArr: task});
});

app.post("/", function(req, res) {
    if(req.body.btn === "Work") {
        work.push(req.body.listItem);
        res.redirect("/work");
    } else {
        task.push(req.body.listItem);
        res.redirect("/");
    } 
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", listArr: work});
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() { 
    console.log("Server is running on port 3000.");
});