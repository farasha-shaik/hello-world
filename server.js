const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f8ff;
                    text-align: center;
                    margin: 0;
                    padding: 0;
                }
                h1 {
                    color: #33333394;
                    margin-top: 20%;
                }
            </style>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>Welcome to my sample web page!</p>
        </body>
        </html>
    `);
});

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Server is healthy' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
