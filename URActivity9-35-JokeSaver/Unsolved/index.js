const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios
  .get("https://icanhazdadjoke.com/", config)
  .then(function(res) {
    console.log(res.data);

    // Append the `joke` property of the response data to a file named `jokes.txt`

    return appendFileAsync("jokes.txt", res.data.joke);
  })
  //After appending the joke, read from the `jokes.txt` file and print its entire contents to the console.
  .then(function() {
    return readFileAsync("jokes.txt", "utf-8");
  })
  .then(function(data) {
    return console.log(data);
  });
