const Vehicle = require("./vehicle");

class Car extends Vehicle {
  constructor(id, color, passengers) {
    const numberOfWheels = 4;
    const sound = "Honk!";

    super(id, numberOfWheels, sound);

    this.color = color;
    this.passengers = passengers;
  }

  checkPassengers() {
    if (this.passengers > 4) {
      return console.log("Too many passengers!");
    }
  }

  useHorn() {
    return console.log(this.sound);
  }
}

const car = new Car("Honda", "red", 5);
car.printInfo();
car.checkPassengers();
car.useHorn();
