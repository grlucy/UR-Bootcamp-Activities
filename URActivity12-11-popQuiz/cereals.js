const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "***",
  database: "cereal_db"
});

connection.connect(function(err) {
  if (err) throw err;

  connection.query("SELECT * FROM cereals", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
});
