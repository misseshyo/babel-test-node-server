import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World5\n');
}).listen(3500, '0.0.0.0');

console.log('Server running at http://localhost:3500/');
