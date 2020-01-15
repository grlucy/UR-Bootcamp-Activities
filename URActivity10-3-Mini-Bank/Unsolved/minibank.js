function MiniBank(balance) {
  this.balance = balance;
  this.statement = [this.balance];
  this.getBalance = function() {
    return this.balance;
  };
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.setBalance = function(val) {
    return (this.balance = val);
  };
  this.updateStatement = function(num) {
    return this.statement.push(num);
  };
  this.getStatement = function() {
    const copyStatement = this.statement;
    return copyStatement;
  };
  this.printStatement = function() {
    this.statement.forEach(element => {
      console.log("Statement:\t" + element + "\t");
    });
  };
  this.deposit = function(value) {
    if (value < 0) {
      return console.log("Error: Cannot deposit a negative amount.");
    }
    return this.setBalance(this.balance + value);
  };
  this.withdraw = function(amount) {
    if (amount > this.balance) {
      return console.log("Error: Cannot withdraw amount greater than balance.");
    }
    if (amount < 0) {
      return console.log("Error: Cannot withdraw a negative amount.");
    }
    return this.setBalance(this.balance - amount);
  };
}

const myBank = new MiniBank(100);

myBank.printBalance();
myBank.updateStatement(200);
myBank.setBalance(200);
myBank.printBalance();
myBank.printStatement();

myBank.deposit(50);
myBank.printBalance();
myBank.updateStatement(myBank.balance);
myBank.printStatement();

myBank.withdraw(75);
myBank.printBalance();
myBank.updateStatement(myBank.balance);
myBank.printStatement();

myBank.withdraw(400);

myBank.withdraw(-2);
myBank.deposit(-40);
