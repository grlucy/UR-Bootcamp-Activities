// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

require("dotenv").config();

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(
  "sequelize_library",
  "root",
  process.env.password,
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

// Exports the connection for other files to use
module.exports = sequelize;
