// Module creates a wrapper function around the module code, which looks like this:

// Creating a module and use it in another file

// console.log(arguments); // show the all arguments that are passed to the wrapper function

// console.log(require('module').wrapper); // show the wrapper function


// modules.exports
// const Calculator = require('./test-module-1');

// const calc1 = new Calculator();

// console.log(calc1.add(2, 5));
// console.log(calc1.subtract(2, 5));
// console.log(calc1.multiply(2, 5));
// console.log(calc1.divide(2, 5));

// exports
// const calculaions = require('./test-module-2');
// const { add, multiply } = require('./test-module-2');

// // First way of exporting module
// console.log(calculaions.add(2, 5));
// console.log(calculaions.multiply(2, 5));

// // Second way of exporting module
// console.log(add(2, 5));
// console.log(multiply(2, 5));



// Caching
// console.log data print only one time because of caching 
// function is called 3 times because below code
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();