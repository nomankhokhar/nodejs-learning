///////////////////////////////////////
// First way of exporting module

// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
//     subtract(a, b) {
//         return a - b;
//     }
//     multiply(a, b) {
//         return a * b;
//     }
//     divide(a, b) {
//         return a / b;
//     }
// }

// module.exports = Calculator;



/////////////////////////////////////
// Second way of exporting module


// module.exports
module.exports = class {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}
