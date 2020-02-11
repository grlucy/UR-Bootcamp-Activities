const express = require("express");
const expressHandlebars = require("express-handlebars");
const mysql = require("mysql");

// Express -- Set up app and PORT
const app = express();
const PORT = process.env.PORT || 8080;

// Express -- Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Handlebars --
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// MySQL --
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "moviePlannerDB"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes

app.get("/", function(req, res) {
  connection.query(`SELECT * FROM movies`, function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { movies: data });
  });
});

app.delete("/movies/:id", function(req, res) {
  connection.query(`DELETE FROM movies WHERE id = ?`, [req.params.id], function(
    err,
    data
  ) {
    if (err) {
      return res.status(500).end();
    } else if (data.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

app.post("/movies", function(req, res) {
  connection.query(
    `INSERT INTO movies (movie) VALUES (?)`,
    [req.body.movie],
    function(err, data) {
      if (err) {
        return res.status(500).end();
      }
      res.json({ id: res.insertId });
    }
  );
});

app.put("/movies/:id", function(req, res) {
  connection.query(
    `UPDATE movies SET movie = ? WHERE id = ?`,
    [req.body.movie, req.params.id],
    function(err, data) {
      if (err) {
        res.status(500).end();
      } else if (data.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Express listener --
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
