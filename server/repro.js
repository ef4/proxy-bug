var server = require('http').createServer();
var form = "<form action=\"/sample\" method=\"POST\"><input type=\"text\" name=\"msg\"></form>";

server.on('request', function(req, res) {
  if (req.method === 'POST') {
    console.log("heard POST, deliberately stalling.");
  } else {
    res.writeHead(200, {
      'Content-Length': form.length,
      'Content-Type': 'text/html' });
    res.write(form);
    res.end();
  }
});

server.listen(8286);
