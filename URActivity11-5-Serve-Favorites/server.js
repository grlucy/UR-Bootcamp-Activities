const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
  let path = req.url;
  if (path === "/") {
    path = "/index.html";
  }
  if (
    path === "/index.html" ||
    path === "/favorite-foods.html" ||
    path === "/favorite-movies.html" ||
    path === "/favorite-frameworks.html"
  ) {
    fs.readFile(__dirname + path, function(err, data) {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    return display404(res);
  }
});

function display404(res) {
  res.end("Error 404: Page not found.");
}

server.listen(8080, function() {
  console.log("Server listening on: http://localhost:8080");
});
