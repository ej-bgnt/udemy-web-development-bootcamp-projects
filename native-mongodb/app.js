const {MongoClient} = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Sucessfully connected to Mongodb.");

    const database = client.db("fruitDB");
    const fruits = database.collection("fruits");

    const doc = {
      _id: 2,
      name: "banana",
      rating: 9.8,
      review: "The og classic fruit of all time."
    };

    // insert
    await fruits.insertOne(doc);
    console.log("New document inserted.");

    // update
    // const query = {_id: 2};
    // const update = {$set: {stock: 12}};
    // await fruits.updateOne(query, update);
    // console.log("Document updated.");

    // delete
    // const query = {_id: 2};
    // await fruits.deleteOne(query);
    // console.log("Document deleted.");

    const findFruits = await fruits.find({}).toArray();
    console.log(findFruits);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();