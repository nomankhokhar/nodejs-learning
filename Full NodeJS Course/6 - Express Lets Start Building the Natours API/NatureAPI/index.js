const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    return res.status(200).send("Routing is working fine")
})

app.post('/', (req, res)=>{
    return res.status(200).send("You can post data to this endpoint");
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})