import 'dotenv/config';
import express from "express"; 
import bodyParser from "body-parser"; 
import ejs from "ejs"; 
import mongoose from "mongoose"; 
import bcrypt from "bcrypt";

const app = express(); 

app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public")); 

const saltRounds = 10;
mongoose.connect("mongodb://localhost:27017/userDB"); 

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
    
const User = new mongoose.model("User", userSchema); 
    
app.get("/", function(req, res) { 
    res.render("home"); 
}); 
    
app.route("/login") 
    .get(function(req, res) { 
        res.render("login"); 
    }) 
    .post(function(req, res) { 
        const checkUsername = req.body.username;
        const checkPassword = req.body.password; 
        
        User.findOne({email: checkUsername}) 
            .then(function(foundUsername) { 
                bcrypt.compare(checkPassword, foundUsername.password, function(err, result) {
                    if(result === true) {
                        console.log("User: " + checkUsername + " has been successfully logged in."); 
                        res.render("secrets");      
                    } else {
                        console.log("Error, no user found."); 
                    }
                });
            }) 
            .catch(function(err) { 
                console.log(err); 
            }); 
    }); 
        
app.route("/register") 
    .get(function(req, res) { 
        res.render("register"); 
    }) 
    .post(function(req, res) { 
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            const newUser = new User ({ 
                email: req.body.username, 
                password: hash
            }); 

            newUser.save() 
                .then(function(savedUser) { 
                    console.log("User: " + savedUser.email + " has been successfully registered."); 
                    res.render("secrets"); 
                }) 
                .catch(function(err) { 
                    console.log(err); 
                }); 
        });
    }); 
    
app.listen(3000, function(){ console.log("Server is running on port 3000"); });
