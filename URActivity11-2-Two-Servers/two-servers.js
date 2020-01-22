const http = require("http");

const port1 = 7000;
const port2 = 7500;

const inspiringQuotes = [
  "The quickest way to double your money is to fold it over and put it back in your pocket.",
  "The real opportunity for success lies within the person and not in the job.",
  "Whoever loves much, performs much, and can accomplish much, and what is done in love is done well.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact."
];

function handleClientReq(req, res) {
  let index = Math.floor(Math.random() * inspiringQuotes.length);
  let quote = inspiringQuotes[index];
  res.end(quote);
}

const server1 = http.createServer(handleClientReq);
server1.listen(port1, function() {
  console.log("server1 is listening on: http://localhost:" + port1);
});

const server2 = http.createServer(handleClientReq);
server2.listen(port2, function() {
  console.log("server2 is listening on: http://localhost:" + port2);
});
