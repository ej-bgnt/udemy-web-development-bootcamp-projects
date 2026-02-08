import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, "No title field."]
    },
    content: {
        type: String,
        required: [true, "No content field."]
    }
})

const Article = mongoose.model("Article", articleSchema);

// all articles route
app.route("/articles")
    .get(function(req, res) {
        Article.find({})
            .then(function(foundArticle) {
                res.send(foundArticle);
            })
            .catch(function(err) {
                console.log(err);
            });
    })
    .post(function(req, res) {
        const newArticle = new Article ({
        title: req.body.title,
        content: req.body.content
        });

        newArticle.save()
            .then(function() {
                res.send("Article successfully inserted.");
            })
            .catch(function(err) {
                console.log(err);
            });
    })
    .delete(function(req, res) {
        Article.deleteMany({})
            .then(function() {
                res.send("All articles successfully deleted.");
            })
            .catch(function(err) {
                console.log(err);
            });
    });

// specific article route
app.route("/articles/:selTitle")
    .get(function(req, res) {
        Article.findOne({title: req.params.selTitle})
            .then(function(selArticle) {
                res.send(selArticle);
            })
            .catch(function(err) {
                console.log(err);
            });
    })
    .put(function(req, res) {
        Article.updateOne(
            {title: req.params.selTitle},
            {title: req.body.title, content: req.body.content},
            {overwrite: true})
        .then(function() {
                res.send("Article ("+ req.params.selTitle +") has been successfully updated.");
            })
            .catch(function(err) {
                console.log(err);
            });
    })
    .patch(function(req, res) {
        console.log(req.body);
        Article.updateOne(
            {title: req.params.selTitle},
            {$set: req.body})
        .then(function() {
                res.send("Article has been successfully patched.");
            })
            .catch(function(err) {
                console.log(err);
            });
    })
    .delete(function(req, res) {
        Article.deleteOne({title: req.params.selTitle})
            .then(function() {
                res.send("Article ("+ req.params.selTitle +") has been successfully deleted.");
            })
            .catch(function(err) {
                console.log(err);
            });
    });

app.listen("3000", function() {
    console.log("Server is running on port 3000.");
});
