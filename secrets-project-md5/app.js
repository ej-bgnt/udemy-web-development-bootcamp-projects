import 'dotenv/config';
import express from "express"; 
import bodyParser from "body-parser"; 
import ejs from "ejs"; 
import mongoose from "mongoose"; 
import md5 from "md5";

const app = express(); 

app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public")); 

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
        const checkPassword = md5(req.body.password); 
        
        User.findOne({email: checkUsername}) 
            .then(function(foundUsername) { 
                if (foundUsername.password === checkPassword) { 
                    console.log("User: " + checkUsername + " has been successfully logged in."); 
                    res.render("secrets"); 
                } else { 
                    console.log("Error, no user found."); 
                } 
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
        const newUser = new User ({ 
            email: req.body.username, 
            password: md5(req.body.password) 
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
    
app.listen(3000, function(){ console.log("Server is running on port 3000"); });
