const http = require('http');
const url = require('url');
const { authenticate } = require('./auth');
const { freeBody } = require('./utils');
const { handleBooks, handleAuthors } = require('./handlers');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url);
    const path = reqUrl.pathname;

    if (path === '/books') {
        authenticate(req)
            .then(() => freeBody(req))
            .then(body => handleBooks(req))
            .then(result => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            })
            .catch(error => {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
            });
    } else if (path === '/authors') {
        authenticate(req)
            .then(() => freeBody(req))
            .then(body => handleAuthors(req))
            .then(result => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            })
            .catch(error => {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

const port = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${port}`);
});
