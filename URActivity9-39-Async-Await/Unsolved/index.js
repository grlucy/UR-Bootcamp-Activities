const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

let animalArray = [];
let animalStr;

async function combineAnimals() {
  try {
    const catJSON = await readFileAsync("cat.json", "utf8");

    const dogJSON = await readFileAsync("dog.json", "utf8");

    const goldfishJSON = await readFileAsync("goldfish.json", "utf8");

    const hamsterJSON = await readFileAsync("hamster.json", "utf8");

    animalArray.push(JSON.parse(catJSON));
    animalArray.push(JSON.parse(dogJSON));
    animalArray.push(JSON.parse(goldfishJSON));
    animalArray.push(JSON.parse(hamsterJSON));

    animalStr = JSON.stringify(animalArray, null, 2);

    await writeFileAsync("combined.json", animalStr);
    return console.log("Successfully wrote combined.json.");
  } catch (err) {
    console.log(err);
  }
}

combineAnimals();
