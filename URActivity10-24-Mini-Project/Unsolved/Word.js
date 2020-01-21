const Letter = require("./Letter");

//Contains a class, `Word`, that depends on the `Letter` class. This is used to create an object representing the current word the user is attempting to guess.

class Word {
  constructor(randomWord) {
    this.originalWord = randomWord;

    //should define: An array of `new` `Letter` objects representing the letters of the underlying word

    this.wordLetters = randomWord.split("").map(character => {
      return new Letter(character);
    });
  }

  //should define: A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  representWord() {
    let tempWord = "";
    for (const index of this.wordLetters) {
      tempWord += index.toString();
    }
    return console.log(tempWord);
  }

  //should define: A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

  guessChecker(guessLetter) {
    for (const index of this.wordLetters) {
      index.checkChar(guessLetter);
    }
  }
}

module.exports = Word;
