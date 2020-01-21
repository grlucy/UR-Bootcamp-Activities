class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

  processProductSale(name) {
    this.stock.forEach(product => {
      if (product.name === name) {
        if (product.count > 0) {
          this.revenue += product.price;
          product.count--;
          console.log("Sold " + product.name);
        } else {
          console.log("Cannot process sale - product is not in stock.");
        }
      }
    });
  }

  replenishStock(name, count) {
    this.stock.forEach(product => {
      if (product.name === name) {
        product.count += count;
        console.log("Added " + count + " of " + name + " to inventory.");
      }
    });
  }
}

module.exports = Store;
