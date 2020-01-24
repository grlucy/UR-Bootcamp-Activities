const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);

var users = [];

function handleRequest(request, response) {
  if (request.method === "POST" && request.url === "/users") {
    request.on("data", function(data) {
      console.log("data:");
      console.log(data);
      users.push(data);
    });
    request.on("end", function() {
      console.log(`You did a ${request.method}`);
      response.end(JSON.stringify(users));
    });
  } else {
    fs.readFile(__dirname + "/index.html", function(err, data) {
      if (err) throw err;
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }
}

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
