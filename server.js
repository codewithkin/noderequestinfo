// Node information storer
/*
 THis script receives information via a request and  writes it to a text file
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const log = `Time: ${Date.now()}, Request method: ${req.method}, Request url: ${req.url}\n`;
    
    // Log to console
    console.log(log);

    // Log to file
    fs.appendFile('request_logs.txt', log, (err) => {
        if (err) throw err;
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
