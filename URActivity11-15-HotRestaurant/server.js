//Dependencies
const express = require("express");
const path = require("path");

//Express app
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Data
let reservations = [];

let waitlist = [];

//Routes

//HTML Pages
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//JSON Data
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/api/tables", function(req, res) {
  const newReservation = req.body;
  console.log(newReservation);

  if (reservations.length < 5) {
    reservations.push(newReservation);
    res.send(true);
  } else {
    waitlist.push(newReservation);
    res.send(false);
  }
});

app.post("/api/clear", function(req, res) {
  reservations = [];
  waitlist = [];
});

// Listener

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
