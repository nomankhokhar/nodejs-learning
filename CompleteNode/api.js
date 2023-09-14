const express = require('express');
const dbConnection = require('./mongodb');
const mongoDB = require('mongodb');
const app = express();

app.use(express.json());





// get data from DataBase

app.get('/', async (req, resp) => {
    let data = await dbConnection();
    data = await data.find({}).toArray();
    resp.send({ data })
});







// insert data from DataBase

app.post("/", async (req, resp) => {
    let data = await dbConnection();
    let restult = await data.insert(req.body);
    resp.send(restult);
});





// Update Data from Database
// :parameter name like (:name) access varable from Parameter mean URL


app.put("/:name", async (req, resp) => {
    let data = await dbConnection();
    let result = await data.updateOne(
        {
            name: req.params.name
        },
        {
            $set: req.body
        });
    console.log(result);
    resp.send({ result: "Updated" });
});






// Delete touple in MongoDB using ID this is use

app.delete("/:id", async (req, resp) => {
    let data = await dbConnection();
    let result = await data.deleteOne({_id:new mongoDB.ObjectId(req.params.id)});
    console.log(result);
})
app.listen(3000);