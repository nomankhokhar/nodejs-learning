// Nodejs work on top of the V8 Engine that build on C++ langauge

// Nodejs is a runtime environment for executing JavaScript code. It is built on top of the V8 JavaScript engine that runs in Google Chrome. It is an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

// libuv is a multi-platform support library with a focus on asynchronous I/O. It was primarily developed for use by Node.js, but it’s also used by Luvit, Julia, pyuv, and others. It was originally developed for NodeJS
// libuv contain event loop and thread pool


// http parser, c-ares, OpenSSL and zlib are the other libraries that Node.js uses


// http-parser: This is a C library for parsing HTTP messages. It's used by Node.js to efficiently parse HTTP requests and responses.

// c-ares: This is a C library that performs DNS requests asynchronously. Node.js uses it for DNS resolution, particularly in network-related operations where asynchronous behavior is important for performance.

// OpenSSL: This is a cryptographic library that provides support for SSL/TLS protocols, as well as cryptographic functions. Node.js uses OpenSSL for secure communication over HTTPS, TLS, and for various cryptographic operations.

// zlib: This is a C library that provides compression and decompression functionality. Node.js utilizes zlib for tasks such as compressing and decompressing data, which can be useful in scenarios like file compression or HTTP compression (e.g., gzip).




// Below suggests by Github-Copilat
// Event Loop, Event Queue, Call Stack, Callback Queue, Microtask Queue, Timers, I/O Callbacks, Close Callbacks, Check Callbacks, SetImmediate Callbacks, Next Tick Queue, Timers Queue, Pending Callbacks, Idle, Prepare, Poll, Check, Close, Timers, Pending Callbacks, Next Tick Queue, Microtask Queue, Callback Queue, Event Loop, Event Queue, Call Stack, Threads Pool, Threads, Process




// Process, threads, Threads Pool in NodeJS -> See Pictures