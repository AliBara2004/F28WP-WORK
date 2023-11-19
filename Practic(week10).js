var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(response);
  }
});

server.listen(8080);
console.log("Server is running at http://localhost:8080/");

