const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "MySQL85!",
  database: "employeeTracker_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start()
  });

  function start() {
    inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Would you like to do?",
      choices: [
        "View Employees",
        "View Employees by Department",
        // "View Employees by Manager",
        "Add Employee",
        "Remove Employees",
        "Update Employee Role",
        "Add Role",
        // "Remove Role",
        // "Update Employee Manager",
        "End"]
    })
  }