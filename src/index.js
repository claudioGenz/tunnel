const http = require('http');
const hostname = `127.0.0.1`;
const port = 3325;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contet-Type', 'text/plain');
    res.end("Hello NodeJS");
});

server.listen(port, hostname, () => {
    console.log(`Server Run Coyote at http://${hostname}:${port}/`);
});