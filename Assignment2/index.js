//importing http and fs inbuilt module
const http = require('http');
const fs = require('fs');

//establishing the different routes
const port = 4500
const host_name = 'localhost';

const behaviour = function (req, res) {
    res.setHeader("Content-Type", "application/json");

    if (req.url === '/books' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end("Pick a book today and dare to finish it");
    }  else if (req.url === '/books' && req.method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('The world is waiting for your contribution')
    } else if (req.url === '/books' && req.method === 'DELETE') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Not every content is worth reading');
    } else if (req.url === '/books/author/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Brian Tracy is one of my favourite author');
    } else if (req.url === '/books/author/' && req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('');
    } else if (req.url === '/books/author/' && req.method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end("Add John Maxwell's book to your library today" );
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Server could not find requested webpage.'
        }));
    }
};

//creating server
const server = http.createServer(behaviour)

server.listen(port,host_name , () => {
    console.log(`Server is listening on ${host_name}:${port}`)
})
