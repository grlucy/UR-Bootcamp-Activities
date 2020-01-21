class Toy {
  constructor(name, price, count) {
    this.name = name;
    this.count = count;
    this.price = price;
  }
}

const toys = [
  new Toy("Action Figure", 14.99, 5),
  new Toy("Rare Toy", 17.99, 1)
];

module.exports = {
  Toy,
  toys
};
