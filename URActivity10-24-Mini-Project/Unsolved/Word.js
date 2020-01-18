// Check to see if letter is in word

class Word {
  constructor(gameWord) {
    this.word = gameWord;
  }
  checkLetterInWord(letter) {
    if (this.word.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Word;
