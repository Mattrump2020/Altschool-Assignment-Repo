// importing the in-built http module
const http = require('http');

// creating the server
const port = 8900;
const hostname = "localhost";
const name = "Mattrump";

const behaviour = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`My name is ${name}`);
};

const server = http.createServer(behaviour);


//server to listen on
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });