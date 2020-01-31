var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "XXX",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log("All songs in database:");
    console.log(res);
    let pop = [];
    let rock = [];
    let classic = [];
    for (let i = 0; i < res.length; i++) {
      if (res[i].genre === "Pop") {
        pop.push(res[i]);
      }
      if (res[i].genre === "Classic Rock") {
        classic.push(res[i]);
      }
      if (res[i].genre === "Rock") {
        rock.push(res[i]);
      }
    }
    console.log("All pop songs in database:");
    console.log(pop);
    console.log("Titles of all songs by Billie Eilish in database:");
    for (let i = 0; i < res.length; i++) {
      if (res[i].artist === "Billie Eilish") {
        console.log(res[i].title);
      }
    }
    connection.end();
  });
}
