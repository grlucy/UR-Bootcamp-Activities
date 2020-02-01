Array.prototype.unique = function() {
  return this.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};

const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "***",
  database: "topsongs_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");

  startPrompt();
});

function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "startChoice",
        message: "What would you like to do?",
        choices: [
          "Search for a specific song",
          "Search for songs by a specific artist",
          "Search for songs within a specific popularity range",
          "Search for artists with multiple top songs",
          "Quit"
        ]
      }
    ])
    .then(val => {
      switch (val.startChoice) {
        case "Search for a specific song":
          return songSearch();
        case "Search for songs by a specific artist":
          return artistSearch();
        case "Search for songs within a specific popularity range":
          return popRangeSearch();
        case "Search for artists with multiple top songs":
          return repeatHitSearch();
        case "Quit":
          return quitProgram();
      }
    });
}

function songSearch() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "songName",
        message: "Song name:"
      }
    ])
    .then(val => {
      const query = connection.query(`SELECT * FROM top5000`, function(
        err,
        res
      ) {
        if (err) throw err;
        console.log(`Searching for ${val.songName}...`);
        let songFound = false;
        for (const song of res) {
          if (song.song_title.toLowerCase() === val.songName.toLowerCase()) {
            songFound = true;
            console.log(song);
          }
        }
        if (songFound === false) {
          console.log(`ERROR: Unable to find song named ${val.songName}.`);
        }
        return startPrompt();
      });
    });
}

function artistSearch() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "artistName",
        message: "Artist name:"
      }
    ])
    .then(val => {
      const artistName = val.artistName;
      const query = connection.query(
        `SELECT * FROM top5000 WHERE ?`,
        [{ song_artist: artistName }],
        function(err, res) {
          if (err) throw err;
          console.log(`Searching for songs by ${artistName}...`);
          if (res.length < 1) {
            console.log("No songs by that artist were found.");
          } else {
            console.log(res);
          }
          return startPrompt();
        }
      );
    });
}

function popRangeSearch() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "rangeStart",
        message: "Starting popularity rank:"
      },
      {
        type: "number",
        name: "rangeEnd",
        message: "Ending popularity rank:"
      }
    ])
    .then(val => {
      const query = connection.query("SELECT * FROM top5000", function(
        err,
        res
      ) {
        const rangeStart = val.rangeStart;
        const rangeEnd = val.rangeEnd;
        console.log(
          `Searching for songs ranked between #${rangeStart} and #${rangeEnd}...`
        );
        for (let i = rangeStart - 1; i <= rangeEnd - 1; i++) {
          console.log(res[i]);
        }
        return startPrompt();
      });
    });
}

function repeatHitSearch() {
  console.log("Searching for artists with multiple top songs...");
  const query = connection.query("SELECT * FROM top5000", function(err, res) {
    if (err) throw err;
    let artists = res.map(x => x.song_artist);
    let firstInstance = [];
    let repeatArtists = [];
    for (const artist of artists) {
      if (firstInstance.indexOf(artist) !== -1) {
        repeatArtists.push(artist);
      } else {
        firstInstance.push(artist);
      }
    }
    console.log(repeatArtists.unique());
    return startPrompt();
  });
}

function quitProgram() {
  console.log("Goodbye!");
  connection.end();
}
