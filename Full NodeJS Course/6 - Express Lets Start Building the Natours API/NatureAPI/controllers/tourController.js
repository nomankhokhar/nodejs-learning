const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

const checkBody = (req, res, next) => {  
    if (!req.body.name || !req.body.duration || !req.body.difficulty) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing {name, duration, difficulty} in the body'
        })
    }
    next()
 }
const checkID = (req, res, next, val) => {

    console.log(`Tour id is ${val}`)

    if(req.params.id * 1 > tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    next();
}

const getAllTours = (req,res)=>{

    res.status(200).json({
        status: 'success',
        results: tours.length,
        data : {
            tours
        }
    })
}

const getTour = (req, res) => {
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
}

const updateTour = (req, res) => {
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
}

const patchTour = (req, res) => {
    
    // * 1 is a trick to convert string to number
    const id = req.params.id * 1;

    const tour = tours.find(el => el.id === id)

    res.status(200).json({
        status: 'success',
        data : {
            tour: '<Updated tour here...>',
        }
    })

}

const deleteTour = (req, res) => {
    
    // * 1 is a trick to convert string to number
    const id = req.params.id * 1;

    const tour = tours.find(el => el.id === id)

    res.status(204).json({
        status: 'success',
        data : null
    })

}

module.exports = { deleteTour , patchTour , updateTour , getTour , getAllTours , checkID , checkBody}