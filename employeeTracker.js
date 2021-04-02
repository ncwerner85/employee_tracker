const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// constructor Classes
const employee = require("./constructors/employee")
const department = require("./constructors/department")
const role = require("./constructors/role")

const roleArray = [];
const managerArray = [];
const roleAndIDArray = [];
const managerAndIDArray = [];

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
// function to handle Add Employee
function addEE() {
    inquirer
    .prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the first name of the new employee?",
            
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the last name of the new employee?",
        },
        {
            name: "department",
            type: "list",
            message: "Please selecte select the department the new employee",
            choices: [
                "Sales",
                "Web Development",
                "Recruiting",
                "Legal"
            ]
        },
        {
            name: 'role',
            type: 'list',
            message: 'What Is The Job Title Of This New Employee?',
            choices: [
                "Sales Associate",
                "Sales Manager",
                "Sales Director",
                "Junior FrontEnd Developer",
                "Senior FrontEnd Developer",
                "Junior FullStack Developer",
                "Senior FullStack Developer",
                "Developer Manager",
                "Recruiter",
                "Senior Recruiter",
                "Operations Manager",
                "ParaLegal",
                "Legal Team Manager",
                "Lawyer",
            ]
        },
        {
            name: 'manager',
            type: "input",
            message: "Who is the Manager of the new employee?",
        },
    ])
    .then(function (answer) {
        console.log("Adding new employee")
        let employeeFirstName = answer.first_name
        let employeeLastName = answer.last_name
        // let employeeDepartment = answer.department
        function FindRoleID() {
            for (let i = 0; i < roleAndIDArray.length; i++) {
                if (roleAndIDArray[i].title === answer.role) {
                    return roleAndIDArray[i].id;
                }
            }
        }
        function FindManagerID() {
            for (let j = 0; j < managerAndIDArray.length; j++) {
                if (managerAndIDArray[j].manager_name === answer.manager) {
                    return managerAndIDArray[j].manager_id;
                }
            }
        }
        let employeeRole = FindRoleID();
        let employeeManager = FindManagerID();
        let addNewEmployee = new employee(employeeFirstName, employeeLastName, employeeDepartment, employeeRole, employeeManager);
        connection.query("INSERT INTO employee SET ?", addNewEmployee, function(err, res) {
            if (err) throw err;
        });
        start()
    });
}

// function to handle View Department

// function to handle Add Department

// function to handle View Role

// function to handle Add Role  