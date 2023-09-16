const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

// Regen in MongoDB
// => /^Noman/  this will find start from the string
// => /Noman$/  this will find end from the string and this is centisis 
// => /Noman$/i  this will find end from the string this is not centisis
// => /.*Noman.*/  this will find end from the every Where in the string
// => /.*Noman.*/i  this will find end from the every Where in the string and case incentisis



async function getCourses() {
  return await Course
  .find({ isPublished: true })
  .or([  
    { price: { $gte: 15 } },
    { name: /.*by.*/i }
  ])
  .sort('-price')
  .select('name author price');
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
