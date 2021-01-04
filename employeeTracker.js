var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 8080
  port: 8080,

  // Your username
  user: "root",

  // Your password
  password: "MySQL85!",
  database: "employeeTracker_DB"
});
