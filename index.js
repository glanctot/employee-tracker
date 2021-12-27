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
    db.query(`SELECT * FROM roles`, (err, rows) => {
        console.table(rows)
        startingQuestion();
    })
}

function exit() {
    db.end();
}


startingQuestion();