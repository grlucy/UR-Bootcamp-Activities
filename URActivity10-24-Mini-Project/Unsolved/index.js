const inquirer = require("inquirer");
const randomWords = require("random-words");

const Word = require("./Word");

//Randomly selects a word and uses the `Word` class to store it

class GameRound {
  constructor() {
    this.guessesLeft = 0;
  }

  start() {
    this.guessesLeft = 10;
    const randomWord = randomWords();
    const gameWord = new Word(randomWord);
    this.newGuess();
  }

  newGuess(){
    const guess = await inquirer.prompt({
      type: "input",
      name: "guessLetter",
      message: "Guess a letter: "
    });
    return guess.guessLetter;

  }
}

//Prompts the user for each guess and keeps track of the user's remaining guesses
// const currentGuessLetter = async function userPrompt() {
//   try {
    // const guess = await inquirer.prompt({
    //   type: "input",
    //   name: "guessLetter",
    //   message: "Guess a letter: "
    // });
    // return guess.guessLetter;
//   } catch (err) {
//     console.log(err);
//   }
// };

// function gameRound() {
//   // if (guessesLeft > 0) {
//   console.log("-".repeat(75));
//   console.log("The word is:");
//   gameWord.representWord();
//   // console.log("You have already guessed: " + guessesArr);
//   gameWord.guessChecker(currentGuessLetter());
//   gameWord.representWord();
//   // } else {
//   //   console.log("-".repeat(75));
//   //   console.log("You have used all of your guesses!\nGAME OVER");
//   // }
// }

// gameRound();
