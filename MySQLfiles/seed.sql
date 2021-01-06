USE employeeTracker_DB

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jay", "Vancollar", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bertie", "Ludlow", 11, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bobby", "Haine", 9, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cameron", "Livingstone", 4, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aidan", "South", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bradley", "Fothergill", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Declan", "O'Driscoll", 10, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Abraham", "Walton", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Opal", "Okey", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Amanda", "Cornish", 8, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ethel", "Ivory", 12, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ryankie", "Vard", 7, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tobinnie", "Utley", 8, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brooke", "Thurlowdonse", 5, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dick", "Richardson", 11, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 60000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 85000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Director", 120000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Junior FrontEnd Developer", 95000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior FrontEnd Developer", 150000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Junior FullStack Developer", 95000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior FullStack Developer", 150000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Developer Manager", 215000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Recruiter", 55000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior Recruiter", 75000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Operations Manager", 125000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("ParaLegal", 95000.00, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 200000.00, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Manager", 345000.00, 4);

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Web Development");
INSERT INTO department (name)
VALUES ("Recruiting");
INSERT INTO department (name)
VALUES ("Legal");