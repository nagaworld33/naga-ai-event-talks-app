const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const indexPath = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(indexPath, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log(`Serving file: ${indexPath}`);
});