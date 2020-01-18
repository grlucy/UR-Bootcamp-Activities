const inquirer = require("inquirer");
const randomWords = require("random-words");
const Word = require("./Word");

// Initialization - Choose random word

const gameWord = randomWords(1).join("");
let incorrectCount = 10;

// uses the Word class to store it

const word = new Word(gameWord);
console.log("The answer is " + word.word); // Remove this later

// Prompt the user for a letter

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "userGuess",
      message: "Guess a letter: "
    }
  ]);
}

let letter;

async function guess() {
  try {
    letter = await promptUser();
    // Log whether user answer was correct or incorrect
    if (word.checkLetterInWord(letter.userGuess)) {
      console.log("Correct, that letter is in the word.");
    } else {
      console.log("Incorrect, that letter is not in the word.");
      incorrectCount--;
      console.log(`You have ${incorrectCount} guesses remaining.`);
    }
    // Display what letters have been selected
    // If game is not over, ask for next guess; or end the game
    if (incorrectCount <= 0) {
      return console.log("GAME OVER!");
    } else {
      guess();
    }
  } catch (err) {
    console.log(err);
  }
}

guess();
