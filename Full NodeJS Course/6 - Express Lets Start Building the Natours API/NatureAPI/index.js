const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');

// Apply middleware to all routes

app.use(morgan('dev'))
app.use(express.json())

app.use((req, res, next) => {
    console.log('Hello from the middleware')
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    req.noman = 'Noman Ali'
    next()
})

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

const getAllTours = (req,res)=>{
    console.log(req.requestTime)
    console.log(req.noman)

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

    if(id > tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

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

    if(id > tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    const tour = tours.find(el => el.id === id)

    

    res.status(204).json({
        status: 'success',
        data : null
    })

}

const getAllUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })

}

const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}


// One way to create routes

// app.get('/api/v1/tours', getAllTours)
// app.post('/api/v1/tours', updateTour)

// /:id/:x/:y?/:z? we can get x, y, z as optional parameters
// http://localhost:4000/api/v1/tours/1/2/3/4
// values store it in req.params and it will be an object
//  { id: '1', x: '2', y: '3', z: '4' }

// app.get('/api/v1/tours/:id', getTour)
// app.patch('/api/v1/tours/:id', patchTour)
// app.delete('/api/v1/tours/:id', deleteTour)


// Another best way to create routes

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route('/')
    .get(getAllTours)
    .post(updateTour);


tourRouter.route('/:id')
    .get(getTour)
    .patch(patchTour)
    .delete(deleteTour);

userRouter.route('/')
    .get(getAllUser)
    .post(createUser)

userRouter.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
    

const PORT = 4000;
    
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})