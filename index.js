const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Jameson20!',
        database: 'company'
    },
    console.log('connected to the database')
);

const startingQuestion = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
        }
    ])
    .then(answer => {
        switch (answer.choice) {
            case "View all departments":
                viewAllDepartments();
                break;
            case "View all roles":
                viewAllRoles();
                break;
            case "View all employees":
                viewAllEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateEmployeeRole();
                break;
            case "Exit":
                exit();
                break;
        }
    })
}

function viewAllDepartments() {
    db.query(`SELECT * FROM departments`, (err, rows) => {
        console.table(rows)
        startingQuestion();
    })
}

function viewAllRoles() {
    db.query(`SELECT roles.*, departments.dept_name AS department FROM roles LEFT JOIN departments ON roles.dept_id = departments.id`, (err, rows) => {
        console.table(rows)
        startingQuestion();
    })
}

function viewAllEmployees() {
    db.query(`SELECT employees.*, roles.job_title, roles.salary, departments.dept_name FROM employees LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN departments ON roles.dept_id = departments.id`, (err, rows) => {
        console.table(rows)
        startingQuestion();
    })
}

function addDepartment() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'newDept',
            message: 'What department would you like to add?',
            validate: newDept => {
                if (newDept) {
                    return true;
                } else {
                    console.log('Please enter a department');
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO departments (dept_name)
            VALUES (?)`;

        db.query(sql, answer.newDept, (err, res) => {
            if (err) throw (err);
            console.log('Added ' + answer.newDept + ' to departments');
            startingQuestion();
        })
    })
}

function addRole() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'newRole',
            message: 'What role would you like to add?',
            validate: newRole => {
                if (newRole) {
                    return true;
                } else {
                    console.log('Please enter a role');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter in the salary',
            validate: salary => {
                if (salary) {
                    return true;
                } else {
                    console.log('Please enter a salary');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'deptId',
            message: 'Please enter what department the role is under',
            validate: deptId => {
                if (deptId) {
                    return true;
                } else {
                    console.log('Please enter what department the role is under');
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const params = [answer.newRole, answer.salary, answer.deptId];

        const sql = `INSERT INTO roles (job_title, salary, dept_id)
            VALUES (?, ?, ?)`;

        db.query(sql, params, (err, res) => {
            if (err) throw (err);
            console.log('Added ' + answer.newRole + ' to roles');
            startingQuestion();
        })
    })
}

function exit() {
    db.end();
}

startingQuestion();