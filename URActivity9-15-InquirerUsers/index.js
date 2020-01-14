const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "languages",
      choices: ["English", "French", "Spanish", "Italian", "German", "Japanese"]
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "method",
      choices: ["email", "phone", "snail mail"]
    }
  ])
  .then(data => {
    const fileName =
      data.name
        .toLowerCase()
        .split(" ")
        .join("") + ".json";

    fs.writeFile(fileName, JSON.stringify(data, null, "\t"), err => {
      if (err) {
        return console.log(err);
      }
      return console.log(`Successfully saved ${fileName}`);
    });
  });
