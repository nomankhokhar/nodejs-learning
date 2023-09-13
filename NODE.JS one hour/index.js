// const a={
//   average: (a, b) => {
//     console.log( (a + b) / 2);
//   },
//   percent: (a, b) => {
//     console.log((a / b) * 100);
//   },
// }


// module.exports=a;

// const b={
//     average: ()=>{
//         console.log(a+2);
//     },
//     percentage: ()=>{               // // Practice Purpose
//         console.log(a);
//     }
// }

// module.exports = b;

// // file based , build in, third-party


// const fs = require("fs");

// console.log(fs);

// fs.readFile("./sam.txt", "utf-8",(err,data)=>{     // this wait and lets do other task when complete this will show up in console
//     if(err)
//     {
//         return err;
//     }
// console.log(data);
// });



// const Data = fs.readFileSync("./sam.txt", "utf-8"); //Stop all other things and complete this task...
// console.log(Data);

// console.log("NOMAN ALI");


// const a = "This is Node by NOMAN_ALI Async Wait Success";


// fs.writeFile("./samplewrite.txt",a,()=>{b // // Async writefile method
//     console.log("Async Wait Success");
// });

// const b = "This is Node By Noman Ali Sync No Wait Success";
// fs.writeFileSync("./sampleSync.txt",a);

// console.log("S");


// Path in Node JS

// const req = require("express/lib/request");
// const path = require("path");

// const extentionStoreInThis_PAth = path.extname("./NODE.JS/index.js");

// console.log(extentionStoreInThis_PAth);

// const dir = path.dirname("C:/Users/Kali/Desktop/NODE.JS>");

// console.log(dir);

// b = "/Noman_Ali";
// const join = path.join("C:/Users/Kali/Desktop/NODE.JS>" + b);

// console.log(join);


// // Grabe Information Of the System which we are using 

// const os = require("os");

// console.log(os.freemem());

// console.log(os.hostname());

// console.log(os.totalmem());



// // PokeMon Pkg

// const pokemon = require("pokemon");

// console.log(pokemon.random());


// console.log(pokemon.all());


// // nodemon to run code without code

// npm i nodemon  => nodemon ./index.js (filepath)

// require("nodemon");



// make a Server using Node JS
const fs = require("fs");
const http = require("http");
const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");
console.log(__dirname);

const server = http.createServer((req, res) => {
    // console.log(res.url);
    if (req.url === "/") {
        res.end(home);
    } else if (req.url === "/about") {
        res.end("<h1>ABOUT PAGE</h1>");
    } else if (req.url === "/contact") {
        res.end("<h1><Contact PAGE/h1>");
    } else if (req.url === "/service") {
        res.end("<h1><Service PAGE/h1>");
    }
    else {
        res.end("<h1>404 Page not fOUND</h1>");
    }
});
// PORT = 80 default

server.listen(PORT, hostname, () => {
    console.log(`Server is Working on http://${hostname}:${PORT})`);
})


