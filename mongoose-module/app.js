const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
    _id: Number,
    name: {
        type: String,
        required: [true, "No name field."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: {
        type: String,
        required: [true, "No review field."]
    }
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const newFruit = new Fruit ({
    _id: 5,
    // name: "Tomato",
    rating: 3.0,
    review: "It is a fruit or a vegetable??"
});

// newFruit.save()
//     .then(function () {
//         console.log("New fruit inserted.");
//     })
//     .catch(function(err) {
//         console.log("Error found: " + err);
//     });

const peopleSchema = mongoose.Schema ({
    _id: Number,
    name: String,
    age: Number,
    favoriteFruit: fruitSchema 
});

const banana = new Fruit ({
    _id: 2,
    name: "Banana",
    rating: 9.5,
    review: "The og classic reliable fruit."
});

const mango = new Fruit ({
    _id: 3,
    name: "Mango",
    rating: 6.4,
    review: "Very solid but too sweet for me."
});

const sugarApple = new Fruit ({
    _id: 4,
    name: "Sugar Apple",
    rating: 10.0,
    review: "One of the fruits of all time."
});

// Fruit.insertMany([banana, mango, sugarApple])
//     .then(function() {
//         console.log("Successfully inserted all the fruits.");
//     }) 
//     .catch(function(err) {
//         console.log("Error found: " + err);
//     });

const pineapple = new Fruit ({
    _id: 4,
    name: "Pineapple",
    rating: 5.0,
    review: "It belongs on pizza."
})

async function insertOneFruit () {
    await pineapple.save()
        .then(function() {
            console.log("Fruit successfully inserted");
        })
        .catch(function(err) {
            console.log("Error found: " + err);
        })
        .finally(function() {
            mongoose.connection.close();
        })
}

// insertOneFruit();

const People = mongoose.model("People", peopleSchema);
const newPeople = new People ({
    _id: 2, 
    name: "Amy",
    age: 21, 
    favoriteFruit: pineapple
});

async function insertPeople() {
    try {
        await newPeople.save();
        console.log("New people inserted.");
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
}

// insertPeople();

People.updateOne({_id: 1}, {favoriteFruit: mango})
    .then(function() {
        console.log("Successfully updated document.");
    })
    .catch(function(err) {
        console.log("Error found" + err);
    })
    .finally(function() {
        mongoose.connection.close();
    });

// Fruit.find({})
//     .then(function(fruits) {
//         console.log(fruits);
//         // for(var i = 0; i < fruits.length; i++) {
//         //     console.log("name: " + fruits[i].name);
//         // }
//     })
//     .catch(function(err) {
//         console.log("Error found: " + err);
//     })
//     .finally(function() {
//         mongoose.connection.close();
//         console.log("Mongodb connection closed.");
//     });

async function delFruit() {
    await People.deleteOne({_id: 2})
        .then(function() {
            console.log("Successfully deleted document.");
        })
        .catch(function(err) {
            console.log("Error foundL " + err);
        })
        .finally(function() {
            mongoose.connection.close();
        });
}

// delFruit();