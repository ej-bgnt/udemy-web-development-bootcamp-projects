import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";    // npm i mongoose@5.13.15
import encrypt from "mongoose-encryption";

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: [true, "no email field."]
    },
    password: {
        type: String,
        required: [true, "no password field"]
    }
});

userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res) {
    res.render("home");
});

app.route("/login")
    .get(function(req, res) {
        res.render("login");
    })
    .post(function(req, res) {
        const checkUsername =  req.body.username;
        const checkPassword = req.body.password;

        User.findOne({ email: checkUsername }, function(err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === checkPassword) {
                    console.log("User: " + checkUsername + " has been successfully logged in.");
                    res.render("secrets");
                } else {
                    console.log("Incorrect password");
                }
            } else {
            console.log("No user found");
            }
        }
        });
    });

app.route("/register")
    .get(function(req, res) {
        res.render("register");
    })
    .post(function(req, res) {
        const newUser = new User ({
            email: req.body.username,
            password: req.body.password
        });

        newUser.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("User: " + req.body.username + " has been successfully registered.");
            res.render("secrets");
        }
        });
    });

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});