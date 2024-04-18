const express = require('express');
const app = express();

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
    // Sending a simple response with res.send()
    res.send("Hello, world!");
});

// Route to handle GET requests to /json
app.get('/json', (req, res) => {
    // Sending a JSON response with res.json()
    res.json({ message: "This is a JSON response" });
});

// Route to handle GET requests to /file
app.get('/file', (req, res) => {
    // Sending a file with res.sendFile()
    res.sendFile(__dirname + '/public/index.html');
});

// Route to handle GET requests to /redirect
app.get('/redirect', (req, res) => {
    // Redirecting to another URL with res.redirect()
    res.redirect('https://www.example.com');
});

// Route to handle GET requests to /status
app.get('/status', (req, res) => {
    // Setting a custom HTTP status code with res.status()
    res.status(404).send('404 - Not Found');
});

// Route to handle GET requests to /cookie
app.get('/cookie', (req, res) => {
    // Setting a cookie with res.cookie()
    res.cookie('username', 'john', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});

// Route to handle GET requests to /clearcookie
app.get('/clearcookie', (req, res) => {
    // Clearing a cookie with res.clearCookie()
    res.clearCookie('username');
    res.send('Cookie has been cleared');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
