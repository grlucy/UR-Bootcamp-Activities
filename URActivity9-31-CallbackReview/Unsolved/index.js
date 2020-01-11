const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  // for each animal object, check its `species` property. If an animal is a `dog`, push it to the `dogs` array, else push it to the `cats` array

  animalJSON.forEach(animal => {
    if (animal.species === "dog") {
      return dogs.push(animal);
    }
    return cats.push(animal);
  });

  // convert both the `dogs` and `cats` arrays to JSON strings using `JSON.stringify`. Save the stringified versions of the arrays to new variables.

  const dogsStr = JSON.stringify(dogs);
  const catsStr = JSON.stringify(cats);

  // save the JSON string version of the `dogs` array to a new `dogs.json` file. Print a message after this completes indicating that it was successful

  fs.writeFile("dogs.json", dogsStr, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });

  // save the JSON string version of the `cats` array to a new `cats.json` file. Print a message after this completes indicating that it was successful.

  fs.writeFile("cats.json", catsStr, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
});
