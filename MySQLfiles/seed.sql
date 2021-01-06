USE employeeTracker_DB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jay", "Vancollar", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bertie", "Ludlow", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bobby", "Haine", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cameron", "Livingstone", 8, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aidan", "South", 7, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bradley", "Fothergill", 6, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Declan", "O'Driscoll", 5, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Abraham", "Walton", 4, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Opal", "Okey", 11, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Amanda", "Cornish", 10, 11);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ethel", "Ivory", 9, 11);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ryankie", "Vard", 13, 14);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tobinnie", "Utley", 12, 14);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brooke", "Thurlowdonse", 9, 11);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dick", "Richardson", 14, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frankie", "Walshe", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Basil", "Peacock-Trumpet", 6, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cedric", "Nord", 7, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Levi", "Little", 4, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Roxie", "Overing", 5, 8);

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