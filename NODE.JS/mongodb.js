const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

// We need basically client that connect our db with database and collection means tables
async function dbConnection() {

    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let response = await collection.find({name:"Sony"}).toArray();
    // console.log(response);
}

module.exports = dbConnection;