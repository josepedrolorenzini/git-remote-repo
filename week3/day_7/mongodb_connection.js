
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin956@bau01.adrfrua.mongodb.net/?retryWrites=true&w=majority&appName=BAU01";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



/**
 * db.users.find() // read all the data in mongo db
 * {
  _id: ObjectId('65e5a0ccf87c180973ce8b51'),
  name: 'jose',
  age: 42,
  email: 'josep102@gmail.com'
}

//update mongo db
db.users.updateOne({name: "jose lorenzini"}, { $set: { email: "newemail@example.com"}})

//delete data
db.users.deleteOne({name: "Jared Neil"})

// create collection or row 
db.createCollection("food")

//insert data in food
db.food.insertOne({"name":"Burger", "size":"large","price":10})
db.users.insertOne({"name":"typescript","developer":"microsoft","parading":"multi paradigm"})



//insert many
db.food.insertMany([{"name": "Pizza", "size": "Extra Large", "price": 20},{"name": "hot-dogs", "size": "large", "price": 3}])

//find and filter by key
db.food.find({"price":3});
db.food.find({"size":"Extra Large"})

//find with atomic keywords $or $lt
db.food.find({ $or: [{"price": {$lt: 10}}, {"size": "Extra Large"}]})


///update 
db.food.updateOne({"name": "Pizza"}, {$set: {price: 15}})

db.food.find({ $and: [{"price": {$gt: 5}}, {"size": "Extra Large"}]})
*/