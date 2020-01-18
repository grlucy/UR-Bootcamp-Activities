const Vehicle = require("./vehicle");

class Boat extends Vehicle {
  constructor(id, crew) {
    const numberOfWheels = 0;
    const sound = "Splish splash!";

    super(id, numberOfWheels, sound);

    this.crew = crew;
  }

  crewSoundOff() {
    console.log("Crew member names:");
    for (const name of this.crew) {
      console.log(name);
    }
  }

  useHorn() {
    return console.log(this.sound);
  }
}

const boat = new Boat("Sailboat", ["Jim", "Bob", "Diane"]);
boat.printInfo();
boat.crewSoundOff();
boat.useHorn();
