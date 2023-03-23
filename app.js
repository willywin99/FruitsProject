// jshint esversion: 6

// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "<connection string uri>";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'
 
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
 
// Database Name
const dbName = 'fruitsDB';
 
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('fruits');
 

  // Insert
  const insertResult = await collection.insertMany([
    { name: 'Apple',
      score: 7,
      rating: 'pretty solid fruit, eat when you get sick!' 
    }, 
    { name: 'Peach',
      score: 8,
      rating: 'Juice, nice to eat in Summer' 
    }, 
    { name: 'Tangerine',
      score: 10,
      rating: 'My favorite!' 
    }
  ]);
  console.log('Inserted documents =>', insertResult);
 
    // Read 
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
 
  return 'done.';
}
 
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());