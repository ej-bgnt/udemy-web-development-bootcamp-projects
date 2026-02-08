
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1 style='color:purple; font-size:10rem;'>Hello Wold</h1>");
}); 

app.get("/contact", function(req, res) {
    res.send("<h1 style='font-size:6rem;'>Contact me: @6700</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h1>About me: Its me, myself and I</h1>");
});

app.get("/hobby", function(req, res) {
    res.send("<h1>Hobbies:</h1><ul><li>Procrastinate</li><li>Procrastinate^2</li><li>Procrastinate^3</li></ul>")
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
