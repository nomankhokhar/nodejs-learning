// initialize the program
// Execute the top-level code
// Require modules
// Register events callbacks
// Start Event loop


const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

// By default there 4 thread in libuv thread pool  but we set to 1
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('----------------');

  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick'));
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start ,'Password encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start ,'Password encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start ,'Password encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start ,'Password encrypted');
  });

});

console.log("Hello from the top level code");