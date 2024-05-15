// https://www.youtube.com/watch?v=HSIh8UswVVY&ab_channel=ProgrammingKnowledgehttps://www.youtube.com/watch?v=HSIh8UswVVY&ab_channel=ProgrammingKnowledge


// sudo dpkg -i mongodb-org-mongos_7.0.9_amd64.deb  ->  command to install MongoDB


// First install Server of MongoDB
// MongoDB Shell Installation

// sudo systemctl status mongod
// sudo systemctl start mongod
// mongosh is for shell to interact MongoDB Server



// use <dbName> -> to create a new database or pick existing one
// db.tours.insertOne({name: "The Forest Hiker", price: 297, rating: 4.7}) -> to insert a new document in the collection
// db.tours.find() -> to find all the documents in the collection
// show dbs -> to show all the databases
// show collections -> to show all the collections in the database



// db.tours.find({ name: "Noman Ali"}) -> to find all the documents in the collection where rating is greater than or equal to Noman Ali
// db.tours.find({ rating: {$gte: 4.8}}) -> to find all the documents in the collection where rating is greater than or equal to 4.8
// db.tours.find({ price: {$lte: 500}}) -> to find all the documents in the collection where rating is greater than or equal to 4.8 and price is less than or equal to 500


// Or Operator accept an array of conditions if any of them true then it will return the document
// db.tours.find({$or : [{price : {$lt:500} , rating: {$gte : 4.8}}]}) -> to find all the documents in the collection where rating is greater than or equal to 4.8 and price is less than or equal to 500



// db.tours.find({$or : [{price : {$lt:500} , rating: {$gte : 1}}]}, {name : 1}) -> return only name of the document if any of the condition is true