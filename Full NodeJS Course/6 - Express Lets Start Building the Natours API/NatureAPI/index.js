const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Apply middleware to all routes

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(`${__dirname}/public`))


app.use((req, res, next) => {
    console.log('Hello from the middleware')
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    req.noman = 'Noman Ali'
    next()
}) 


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


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
    
module.exports = app;