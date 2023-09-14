const MySQL = require('mysql');

const con = MySQL.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});


con.connect((e)=>{
    console.log("connect");
});

module.exports = con;