// Dependencies
const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "seinfeld"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/:route", function(req, res) {
  const route = req.params.route;
  let html = `<h1>Seinfeld Actors</h1>`;
  switch (route) {
    case "cast":
      connection.query(`SELECT * FROM actors ORDER BY id`, function(
        err,
        result
      ) {
        if (err) throw err;
        html += `<h4>In order of ID</h4><ul>`;
        for (let i = 0; i < result.length; i++) {
          html += `<li><p>ID #${result[i].id}: ${result[i].name}, ${result[i].coolness_points} coolness points, ${result[i].attitude} attitude</p></li>`;
        }
        html += `</ul>`;
        res.send(html);
      });
      break;
    case "coolness-chart":
      connection.query(
        `SELECT * FROM actors ORDER BY coolness_points DESC`,
        function(err, result) {
          if (err) throw err;
          html += `<h4>In order of coolness points</h4><ul>`;
          for (let i = 0; i < result.length; i++) {
            html += `<li><p>ID #${result[i].id}: ${result[i].name}, ${result[i].coolness_points} coolness points, ${result[i].attitude} attitude</p></li>`;
          }
          html += `</ul>`;
          res.send(html);
        }
      );
      break;
    default:
      res.send(
        "Route does not exist. Use 'cast', 'coolness-chart', or 'attitude-chart'."
      );
      break;
  }
});

app.get("/attitude-chart/:att", function(req, res) {
  const att = req.params.att;
  connection.query(`SELECT * FROM actors WHERE ?`, { attitude: att }, function(
    err,
    result
  ) {
    if (err) throw err;
    let html = `<h1>Seinfeld Actors</h1><h4>Whose attitude is ${att}</h4><ul>`;
    if (result.length < 1) {
      html += `<li><p>No results found for this attitude.</p></li>`;
    } else {
      for (let i = 0; i < result.length; i++) {
        html += `<li><p>ID #${result[i].id}: ${result[i].name}, ${result[i].coolness_points} coolness points, ${result[i].attitude} attitude</p></li>`;
      }
    }
    html += `</ul>`;
    res.send(html);
  });
});

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
