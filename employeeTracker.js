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
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start()
  });
// function which prompts the user for what action they should take
  function start() {
    inquirer
    .prompt({
      type: "list",
      name: "start",
      message: "Would you like to do?",
      choices: [
        "View Employees",
        "Add Employee",
        "View Department",
        "Add Department",
        "View Role",
        "Add Role",
        "Update Employee Role",
        "Exit"
    ]
    })
    .then(function(answer) {
        if (answer.start === "View Employees") {
            viewEE();
        }
        else if (answer.start === "Add Employee") {
            addEE();
        }
        else if (answer.start === "View Department") {
            viewDepartment();
        }
        else if (answer.start === "Add Department") {
            addDepartment();
        }
        else if (answer.start === "View Role") {
            viewRole();
        }
        else if (answer.start === "Add Role") {
            addRole();
        }
        else if (answer.start === "Update Employee Role") {
            updateEErole();
        }
        else{
            connection.end();
        }
    });
  }