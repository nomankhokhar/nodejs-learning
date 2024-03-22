// // NPM Module
// const color = require('cli-color');

// console.log(color.red('Hello World'));

// // Local Module
// const auth = require('./auth');

// auth.register('Nomi');
// auth.login('LOL',"LOl")


// Core Module

const path = require('path');
// dirname
// console.log(path.dirname(__filename))
// filename
// console.log(path.basename(__filename));
// Extension name
// console.log(path.extname(__filename));
// parse
// console.log(path.parse(__filename))
// Join
// console.log(path.join(__dirname,'App','App.js'))



// File System Module
const fs = require('fs');

// Make a directory

// fs.mkdir(path.join(__dirname, '/test'), (err, res) => {
//     if(err){
//         console.log('Something went wrong...', err.code);
//         return;
//     }
//         console.log('Folder created...');
 
// });


// Create a file

// fs.writeFile(path.join(__dirname, 'test' , 'test.txt') ,'Hello Node Module', (err, res) => {
    
//     fs.appendFile(path.join(__dirname, 'test', 'test.txt'), ' More data\n', (err) => {
//         if(err){
//             console.log('Something went wrong...', err.code);
//             return;
//         }
//         console.log('File created...');
//     })

//     console.log("Everything is Done Dude...");
// })


// Read a File

// fs.readFile(path.join(__dirname, 'test', 'test.txt') , 'utf-8' ,(err ,data) => {
//     if(err){
//         console.log('Something went wrong...', err.code);
//         return;
//     }
//     // if you put UTF-8 then no need to ad toString()
//     console.log(data);

//     // Otherwise Do this
//     console.log(data.length);
    
// })



// OS Module

// const os = require('os');

// console.log(os.platform())
// console.log(os.homedir())
// console.log(os.userInfo())
// console.log(os.uptime())
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.cpus())
// console.log(os.networkInterfaces())
// console.log(os.EOL)
// console.log(os.endianness())
// console.log(os.hostname())
// console.log(os.type())
// console.log(os.arch())
// console.log(os.release())
// console.log(os.loadavg())




// Event Module

// const Emitter = require('events')

// const emitter = new Emitter()

// class Auth extends Emitter {
//     register(username){
//         console.log('User Registered...', username);
//         this.emit('registered', username);
//     }
// }

// const auth = new Auth;

// auth.on('registered', (data) => {
//     console.log(`Sending verification email to ${data}`)
// })

// auth.on('registered', (data) => {
//     console.log(`Sending Velkome email to ${data}`)
// })

// auth.register('Kali');