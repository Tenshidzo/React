const http = require('http');
const mylib = require('./mylib');

const hostname = '127.0.0.1';
const port = 3212;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Вызов функции CreateBody из модуля mylib
    const bodyContent = mylib.CreateBody();
    res.end(bodyContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
