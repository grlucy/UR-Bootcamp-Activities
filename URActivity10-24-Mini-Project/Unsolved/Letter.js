// let guessesLeft = 10;
// let guessesArr = [];

//Contains a class, `Letter`. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.

class Letter {
  constructor(character) {
    //should define: A string value to store the underlying character for the letter

    this.underlyingChar = character;

    //should define: A boolean value that stores whether that letter has been guessed yet

    this.hasBeenGuessed = false;
  }

  //should define: A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed -- name your letter's display function `toString`

  toString() {
    if (this.hasBeenGuessed) {
      return this.underlyingChar;
    } else {
      return "-";
    }
  }

  //should define: A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

  checkChar(char) {
    // if (guessesArr.indexOf(char) === -1) {
    //   guessesArr.push(char);
    // }
    if (char === this.underlyingChar) {
      this.hasBeenGuessed = true;
      return true;
      // } else {
      //   guessesLeft--;
    }
  }
}

module.exports = Letter;
