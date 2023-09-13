const express = require("express");
// const { registerUser } = require("./UserController");

const router  = express.Router();

const registerUser = require("./UserController");
router.route("/register").post(registerUser);
router.route("/login").get(registerUser);
// .get((req,res)=>{
    // res.send("I Love UCP forever!");
// })
module.exports = router;