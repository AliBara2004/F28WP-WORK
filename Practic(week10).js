//Some node js i practiced writing :) 


var http = require("http");
var svr = http.createServer(function (request, response) {
response.writeHead(200, { "Content-Type": "text/plain" });
response.end("Luffy will be king of the pirates! ");
})
.listen(8080); //the server object listens on port 8080