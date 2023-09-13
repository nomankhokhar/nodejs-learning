const mongoose = require('mongoose');
const productsScheme = new mongoose.Schema(
    {
     name:String,
     price:Number,
     brand:String,
     category:String
    }
);

 
module.exports = mongoose.model('products',productsScheme);