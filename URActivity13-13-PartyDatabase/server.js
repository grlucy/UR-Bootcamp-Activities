const orm = require("./config/orm");
const consoleTable = require("console.table");

//Console log all the party names.
orm.selectColumn("party_name", "parties", function(result) {
  console.table(result);
});
//Console log all the client names.
orm.selectColumn("client_name", "clients", function(result) {
  console.table(result);
});
//Console log all the parties that have a party-type of grown-up.
orm.selectWhere("parties", "party_type", "grown-up", function(result) {
  console.table(result);
});
//Console log all the clients and their parties.
orm.innerJoin(
  ["client_name", "party_name", "party_type", "party_cost"],
  "clients",
  "parties",
  "id",
  "client_id",
  function(result) {
    console.table(result);
  }
);
