const express = require('express');
const { getAllTours, updateTour, getTour, patchTour, deleteTour, checkID, middleware, checkBody } = require('../controllers/tourController');
const router = express.Router();


router.param('id', checkID)

// Create a check body middleware
// Check if body contains the name and price property
// if not send back 400 (bad request)
// Add it to the post handler stack

router.route('/')
    .get(getAllTours)
    .post(checkBody ,updateTour);


router.route('/:id')
    .get(getTour)
    .patch(patchTour)
    .delete(deleteTour);

module.exports = router;