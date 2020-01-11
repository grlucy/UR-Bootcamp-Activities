const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    // Use the `axios` module to send a GET request to the `queryUrl`. The response object returned from the request should contain a `data` property which should be an array of the user's GitHub repos

    axios.get(queryUrl).then(function(res) {
      //Loop through the array of repos and save only the names of the repos to an array

      const repoNamesArr = res.data.map(repo => repo.name);

      console.log(repoNamesArr);
      const repoNamesLength = repoNamesArr.length;

      // Join the array of repo names to a string separated with a newline character (`\n`)

      const repoNamesStr = repoNamesArr.join("\n");

      // Save the string containing the repo names to a new `repos.txt` file. Once this completes print a message to the console indicating the number of repos saved.

      fs.writeFile("repos.txt", repoNamesStr, err => {
        if (err) {
          return console.log(err);
        }
        return console.log(
          `Success writing repos.txt with ${repoNamesLength} repos saved.`
        );
      });
    });
  });
