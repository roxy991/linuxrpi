var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('jinnapat sa-ngasang 60030015');
}).listen(3004);