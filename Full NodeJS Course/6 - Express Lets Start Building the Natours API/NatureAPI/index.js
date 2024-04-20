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
    // get the last id of the data then add 1 to it for next data id
    
    const newId = tours[tours.length - 1].id + 1;    
    const newTour = Object.assign({ id: newId}, req.body);
    
    // newTour will now contain:
    // {
    //     id: '9 last id and add 1',
    //     name: 'Mountain Trek',
    //     duration: 7,
    //     difficulty: 'moderate'
    // }

    tours.push(newTour)

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), success => {    
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    })
})


// /:id/:x/:y?/:z? we can get x, y, z as optional parameters
// http://localhost:4000/api/v1/tours/1/2/3/4
// values store it in req.params and it will be an object
//  { id: '1', x: '2', y: '3', z: '4' }

app.get('/api/v1/tours/:id', (req, res) => {
    const id = req.params.id;
    
    const tour = tours.find(el => el.id == id)
    
    if(!tour){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
})



const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})