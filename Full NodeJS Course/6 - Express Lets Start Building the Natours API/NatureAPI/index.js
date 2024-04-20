const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json())

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req,res)=>{

    res.status(200).json({
        status: 'success',
        results: tours.length,
        data : {
            tours
        }
    })
})

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body)
    res.send('Done')
})


const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})