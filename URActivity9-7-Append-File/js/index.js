const fs = require("fs");

fs.appendFile("log.txt", process.argv[2] + "\n", function(error) {
  if (error) {
    return console.log(error);
  }
  console.log("Success");
});
