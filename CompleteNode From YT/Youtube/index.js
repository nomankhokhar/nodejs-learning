// // const express = require('express');
// // const app = express();

// const { default: mongoose } = require("mongoose")


// // app.listen(3000);

// // app.get('/', (req,res)=>{
// //     console.log("data sent by browser", req.query.name);
// //     res.send(`<h1>Hello Noman Ali its Home Page ${req.query.name} </h1> <a href="/about">about</a>`);
// // });



// // app.get('/about', (req,res)=>{
// //     res.send(`<input type="text" placeholder="Enter kr na lol :- ">
// //     <button> Click </button>
// //     <a href="/">Home</a>
// //     `);
// // });



// // app.get('/help', (req,res)=>{
// //     res.send([
// //         {
// //             name:"Noman",
// //             email:"aliyounas084@gmail.com"
// //         },
// //         {
// //             name:"Ali",
// //             email:"aliyounas084@gmail.com"
// //         }
// //     ]);
// // });



// // const { response } = require('express');
// // const express = require('express');
// // const { get } = require('http');
// // const app = express();

// // const path = require('path'); // just use to acces to files directory
// // const publicPath = path.join(__dirname, 'public'); // join the both path


// // app.set('view engine','ejs');

// // // app.use(express.static((publicPath)));  // render static pages only
// // // app.use(express.static((publicPath)));


// // app.get('/', (_, res) => {
// //     res.sendFile(`${publicPath}/index.html`)
// // });


// // // app.get('/about', (_, res) => {
// // //     res.sendFile(`${publicPath}/about.html`)
// // // });

// // app.get('/profile', (_,resp)=>{
// //     const user={
// //         name:"Noman",
// //         email:"aliyounas084@gmail.com",
// //         loc:"Multan",
// //         skills:["php","js","Data Science"]
// //     }
// //     resp.render('profile',{user});
// // })



// // app.get('/login',(_,resp)=>{
// //     resp.render(`login`);
// // })



// // app.get('*', (_, res) => {
// //     res.sendFile(`${publicPath}/help.html`);
// // });

// // app.listen(3000);










// // Middle Ware //

// // Application, Route ,Level ,Error-handling, Built-in ,third-party, Middle ware



// // const express = require('express');
// // const app = express();
// // const reqFilter = require("./middleware");
// // const Route = express.Router();

// // Route.use(reqFilter);   // Application Level Middle ware



// // app.get('/', (req, res) => {
// //     res.send("Welcome");
// // });


// // app.get('/user' ,(req, res) => {
// //     res.send("Welcome user");
// // });


// // Route.get('/about', (req, res) => {
// //     res.send("Welcome to about");
// // });


// // Route.get('/contact', (req, res) => {
// //     res.send("Welcome to contact");
// // });

// // app.use('/',Route);

// // app.listen(3000);














// // Mongo Section Start

// // connection are in MongoDB File

// // dbConnection().then((resp)=>{
// //          resp.find().toArray().then((data)=>{
// //                 console.log(data);
// //     });
// // });

// // const dbConnection = require('./mongodb')




// // const main = async () => {
// //     let data = await dbConnection();   // Modern Code Style 
// //     data = await data.find().toArray();
// //     console.log(data);
// // }

// // main();




// // mongoose is Advanced Version of MongoDB
// // Scheme mean all field like sql tables 
// // Model use to connect Shema to table


// //Connection with DB

// mongoose.connect('mongodb://localhost:27017/e-comm');
// const ProductSchema = new mongoose.Schema(
//     {
//         name: String,
//         price: Number,
//         brand: String,
//         category: String
//     }
// );


// // Save in DB

// const SaveinDB = async () => {

//     const ProductModel = mongoose.model('products', ProductSchema);
//     let data = new ProductModel(
//         {
//             name: "M10",
//             price: 3435,
//             brand: "AppleLOL",
//             category: "MobileLOL"
//         });

//     let result = await data.save();
//     console.log(result);
// }

// // Update

// const updateInDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.updateOne(
//         {
//             name: "iphone 13"
//         },
//         {
//             $set: { 
//             name:"NomiALi",
//             price:10000000,
//             brand:"LOL",
//             category:"MobileLOL"    
//             }
//         }
//     )

//     console.log(data);
// }

// // Delete

// const DeleteINDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.deleteOne(
//         {
//             name: "iphone 13"
//         }
//     )

//     console.log(data);
// }

// //Read 

// const findInDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.find(
//         {
//             name: "iphone 13"
//         }
//     )

//     console.log(data);
// }




//  After 6:58:05 config.js product.js


// const express = require('express');
// const app = express();
// app.use(express.json());

// require('./config');
// const Product = require('./product');


// app.post('/create', async (req, resp) => {

//     let data = new Product(req.body);
//     let result = await data.save();

//     console.log(result);
//     resp.send(result);
// });



// app.get('/list', async (req, resp) => {
//     let data = await Product.find();
//     resp.send(data);
// });



// app.delete('/delete/:name', async (req, resp) => {
//     let data = await Product.deleteOne({ name: req.params.name });
//     resp.send(data);
// });


// app.put('/update/:_id', async (req, resp) => {
//     let data = await Product.updateOne(

//         req.params,
//         {
//             $set: req.body
//         }
//     );
//     resp.send(data);
// })




// Search API


// app.get('/search/:key', async (req, resp) => {
//     let data = await Product.find(
//         {
//             "$or": [
//                 {
//                     "name": { $regex: req.params.key },
//                     "brand": { $regex: req.params.key }
//                 }
//             ]
//         }
//     );
//     resp.send(data);
// });






// //  Upload file Multer package

// const multer = require('multer');

// const upload = multer({
//     storage: multer.diskStorage({

//         destination: function (req, file, cb) 
//         {
//             cb(null, "uploads")
//         },
//         filename: function (req, file, cb) 
//         {
//             cb(null,file.fieldname+"-"+Date.now()+".jpg")
//         }
//     })

// }).single("ghfgj");



// app.post('/upload',upload,   (req, resp) => {
//     resp.send("file uploaded");
// });

// app.listen(3000);





//  OS Module in Node JS

// const os = require('os');

// console.log(os.freemem()); // free memory in pc
// console.log(os.totalmem()); // total memory in pc
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.userInfo());




// Event Module
// for only to generate 500 call ya maybe zayada

// const express = require('express');
// const EventEmitter = require('events');

const events = new EventEmitter();


// let count=0;
// events.on("countAPI", ()=>{
//     console.log("Home Call");
//     console.log(++count);
// })

// const app = express();

// app.get("/", (req, resp) => {
//     resp.send("API 0 CALLED!");
//     events.emit("countAPI");
// })


// app.get("/s", (req, resp) => {
//     resp.send("API 1 CALLED!");
// })

// app.get("/u", (req, resp) => {
//     resp.send("API 2 CALLED!");
// })
// app.listen(3000);







// MySQL in NODE.JS




const express = require('express');
const app = express();

const con = require('./confihsql');
const { count } = require('console');

app.get("/", (req, resp) => {
    con.query("select * from lol", (err, res) => {
        console.log(res);
    })
});



app.listen(3000);