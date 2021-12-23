const mysql = require('mysql');
const inquirer = require('inquirer');

const startingQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        }
    ])
    .then(answer => {
        switch (answer.choice) {
            
        }
    })
}