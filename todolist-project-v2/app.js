// || \\

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemSchema = new mongoose.Schema ({
    task: {
        type: String,
        required: [true, "No name field."]
    }
})

const Item = mongoose.model("Item", itemSchema);

const listSchema = new mongoose.Schema ({
    name: String,
    items: [itemSchema]
})

const List = mongoose.model("List", listSchema);

const item1 = new Item ({
    task: "Wake up."
})

const item2 = new Item ({
    task: "Eat food."
})

const item3 = new Item ({
    task: "Sleep early."
})

async function insertArr() {
    await Item.insertMany([item1, item2, item3])
        .then(function() {
            console.log("Documents successfully inserted.");
        })
        .catch(function(err) {
            console.log(err);
        })
}

async function deleteItem(sel) {
    await Item.deleteOne({_id: sel}) 
        .then(function() {
            console.log("Document successfully deleted.");
        })
        .catch(function(err) {
            console.log(err);
        })
}

app.get("/", function(req, res) {
    Item.find({})
        .then(function(items) {
            if(items.length === 0) {
                insertArr();
                res.redirect("/");
            } else {
                res.render("list", {listTitle: "Today", listArr: items});
            }
        })
        .catch(function(err) {
            console.log(err);
        })
});

app.get("/:newRoute", function(req, res) {
    const newList = _.upperFirst(req.params.newRoute);
    console.log(newList);

    const list = new List ({
        name: newList,
        items: [item1, item2, item3]
    });

    List.findOne({name: newList})
        .then(function(result) {
            if(!result){
                list.save();
                res.redirect("/" + newList);
            } else {
                res.render("list", {listTitle: result.name, listArr: result.items});
            }
        })
        .catch(function(err) {
            console.log(err);
        })
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.post("/", function(req, res) {
    const itemName = req.body.listItem;
    const listName = req.body.btn;

    const addItem = new Item ({
        task: itemName
    });

    if(listName === "Today"){
        addItem.save();
        res.redirect("/");
    } else {
        List.findOne({name: listName})
            .then(function(foundList) {
                foundList.items.push(addItem);
                foundList.save();
                res.redirect("/" + listName);
            })
            .catch(function(err) {
                console.log(err);
            })
    }
});

app.post("/delete", function(req, res) {
    const selectedItem = req.body.checkbox;
    const selectedTitle = req.body.hidden;

    if(selectedTitle === "Today") {
        Item.deleteOne({_id: selectedItem}) 
            .then(function() {
                console.log("Document successfully deleted in " + selectedTitle + " page.");
                res.redirect("/");
            })
            .catch(function(err) {
                console.log(err);
            })
    } else {
        List.findOneAndUpdate({name: selectedTitle}, {$pull: {items: {_id: selectedItem}}})
            .then(function() {
                console.log("Document successfully deleted in " + selectedTitle + " page.");
                res.redirect("/" + selectedTitle);
            })
            .catch(function(err) {
                console.log(err);
            })
    }
});

app.listen(3000, function() { 
    console.log("Server is running on port 3000.");
});