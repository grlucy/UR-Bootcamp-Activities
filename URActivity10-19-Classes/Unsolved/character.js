class Character {
  constructor(name, strength, hitpoints) {
    if (!name) {
      throw new Error("You are missing the name.");
    }
    if (!strength) {
      throw new Error("You are missing the strength.");
    }
    if (!hitpoints) {
      throw new Error("You are missing the hitpoints.");
    }
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitpoints <= 0) {
      console.log(`${this.name} has died!`);
      return false;
    }
    return true;
    // return this.hitpoints < 0;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(
      `${this.name} attacked ${opponent.name} for ${this.strength} damage!`
    );
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitpoints -= this.strength;
  }
}

// Create two unique characters using the "character" class

const Taako = new Character("Taako", 20, 38);
const Nott = new Character("Nott", 15, 45);

Taako.printStats();
Nott.printStats();

// Create an interval that alternates attacks every 2000 milliseconds

const battleInterval = setInterval(function() {
  Taako.attack(Nott);
  Nott.attack(Taako);
  // Taako.printStats();
  // Nott.printStats();
  if (!Taako.isAlive() || !Nott.isAlive()) {
    console.log("Game Over");
    clearInterval(battleInterval);
  }
}, 2000);
