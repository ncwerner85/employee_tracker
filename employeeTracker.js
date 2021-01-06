const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// constructor Classes
const employee = require("./constructors/employee")
const department = require("./constructors/department")
const role = require("./constructors/role")

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
            //addEE();
        }
        else if (answer.start === "View Department") {
            //viewDepartment();
        }
        else if (answer.start === "Add Department") {
            //addDepartment();
        }
        else if (answer.start === "View Role") {
            //viewRole();
        }
        else if (answer.start === "Add Role") {
            //addRole();
        }
        else if (answer.start === "Update Employee Role") {
            //updateEErole();
        }
        else{
            connection.end();
        }
    });
  }
  // function to handle viewing employees
function viewEE() {
    console.log("Viewing employees\n");
    
	const query = `
    SELECT e.id AS employee_id, e.first_name, e.last_name, d.name AS department_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
    FROM employee e
    LEFT JOIN role r
    ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee x
    ON e.manager_id = x.id`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		
		console.table(res);

		start();
	});
  }
  