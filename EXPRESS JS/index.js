const express = require("express");
const path = require("path");
const BodyParser = require("body-parser");
const res = require("express/lib/response");
const { registerUser } = require("./UserController");
const router = require("./UserRoute");
const { Router } = require("express");
const app = express();
const port = 4000;
app.use(BodyParser.urlencoded({ extended:false }));  // Encode Url data into JSON Formate
app.use(express.json());  // TO Check Body Data in Json Formate

app.use("/api/v1",router);   // Set Route for URL which Url will be generated

// console.log(__dirname);

// app.get("/about",(req,res)=>{
//     res.send("HELLO About");
// })

// app.get("/contact",(req,res)=>{
//     res.send("HELLO contact");
// })

// get is method
// READ , CREAD , UPDATE , DELETE CRUD OPERATION IN DATABASE
// IN HTTP there are 4 method for crud 
// GET , POST , PUT , DELETE // IN API FORM  THESE WILL BE USE 

// app.get("/api/v1/userData",(req,res)=>{
//     res.sendFile(path.join(__dirname + "/index.html"));
// })


// app.post("/",(req,res)=>{
//      res.send(`<h1> Done Mr ${req.body.fname}
//      <h2>Your Email is  ${req.body.fname}</h2>
//      <h2>Your Password is  ${req.body.pass}</h2>
//      </h1>`);
//      console.log(req.body);  
// })


app.listen(port,()=>{
  console.log(`Server is running : ${port}`);
})


// REST (Representational State Transfer) is an API that define a set of function that programmer can use to send request and receive respones using the HTTP protocol methods such as GET and POST


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
    //     res.json({
//         Name : "Noman Ali",
//         Email:"sample@gmail.com",
//         Password:"Noman_Ali"
//  })
})



