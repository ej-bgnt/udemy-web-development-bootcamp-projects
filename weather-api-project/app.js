const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    const cityName = req.body.city;
    const apiKey = "783c96fa86acbc1cd9fcc0ae8b92770e";
    const tempUnit = req.body.units;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=" + tempUnit +"&appid=" + apiKey;

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const wTemp = weatherData.main.temp;
        const wPlace = weatherData.name;
        const wDesc = weatherData.weather[0].description;
        const wIcon = weatherData.weather[0].icon;
        const iconURL = "https://openweathermap.org/payload/api/media/file/10d@2x.png"

        if(tempUnit === "metric") {
            res.write("<h1>The temperature in " + wPlace + " is: " + wTemp + " degrees Celcius</h1>");
        } else {
            res.write("<h1>The temperature in " + wPlace + " is: " + wTemp + " degrees Fahrenheit</h1>");
        }

        res.write("<p>The weather is currently " +  wDesc + " right now.</p>");
        res.write("<img src=" + iconURL + "/>");
        res.send();
        });
    });

});


app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
