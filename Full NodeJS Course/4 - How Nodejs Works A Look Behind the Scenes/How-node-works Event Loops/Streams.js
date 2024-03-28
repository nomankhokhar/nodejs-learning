// Used to process (read and write) data piece by piece (chunks) without keeping the whole data in memory.

// Perfect for handling large volumes of data, like files, network requests, etc.


// There is 4 types of streams in Node.js:


// 1. Readable Streams: Used for reading large amounts of data from a source.
// 2. Writable Streams: Used for writing large amounts of data to a destination.
// 3. Duplex Streams: Used for both reading and writing to a destination.
// 4. Transform Streams: A type of duplex stream where the output is computed based on the input.


// Streams are instance of EventsEmitter class



const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req, res)=>{
    
    // Solution 1 - Not efficient for large files load whole file in memory then send to the client

    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // })

    
    // Stream Solution load chunk by chunk and send to the client more efficient
    
    // const Readable = fs.createReadStream('test-file.txt');

    // Readable.on('data', chunk => {
    //     res.write(chunk);
    // })
    
    // Readable.on('end', () => {
    //     res.end();
    // })

    // Readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // })


    // Solution 2 - More efficient way to send data to the client

    const Readable = fs.createReadStream('test-file.txt');
    Readable.pipe(res);
})


server.listen(8000,'127.0.0.1', ()=>{
    console.log('Listening...');
})