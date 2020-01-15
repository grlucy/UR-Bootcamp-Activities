function RPGchar(name, profession) {
  this.name = name;
  this.profession = profession;
  this.age = Math.floor(Math.random() * 60) + 15;
  this.strength = Math.ceil(Math.random() * 20);
  this.hitPoints = Math.ceil(Math.random() * 20) + 20;
  this.printStats = function() {
    console.log("----------------------------");
    console.log("Name: " + this.name);
    console.log("Profession: " + this.profession);
    console.log("Age: " + this.age);
    console.log("Strength: " + this.strength);
    console.log("HitPoints: " + this.hitPoints);
    console.log("----------------------------");
  };
}

const Gary = new RPGchar("Gary", "Electrician");
Gary.printStats();

const Mario = new RPGchar("Mario", "Plumber");
Mario.printStats();

RPGchar.prototype.isAlive = function() {
  //Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
  if (this.hitPoints > 0) {
    return console.log(this.name + " is alive.");
  }
  return console.log(this.name + " is dead.");
};
RPGchar.prototype.attack = function(victim) {
  //Function which takes in a second character and subtracts this character's strength from their hitpoints.
  victim.hitPoints -= this.strength;
  console.log(this.name + " attacked " + victim.name);
  console.log(victim.name + " lost " + this.strength + " HP!");
};
RPGchar.prototype.levelUp = function() {
  //Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
  this.age++;
  this.strength += 5;
  this.hitPoints += 25;
  console.log(this.name + " leveled up!");
  this.printStats();
};

function combatRound() {
  if (Gary.hitPoints <= 0 && Mario.hitPoints <= 0) {
    Gary.isAlive();
    Mario.isAlive();
    return console.log("No winner!\nGAME OVER");
  }
  if (Gary.hitPoints <= 0) {
    Gary.isAlive();
    console.log("Mario wins!");
    return Mario.levelUp();
  }
  if (Mario.hitPoints <= 0) {
    Mario.isAlive();
    console.log("Gary wins!");
    return Gary.levelUp();
  }
  Gary.attack(Mario);
  Mario.attack(Gary);
  combatRound();
}

combatRound();
