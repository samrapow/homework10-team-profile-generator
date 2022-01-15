const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// link to html page
const createHTML = require('./src/createHTML');

const cardArray = [];

// get information from user
const newManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        cardArray.push(manager); 
    })
};

const newEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Which type of employee would you like to add?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern go to?",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addMoreEmployees',
            message: 'Do you want to add more employees?',
        }
    ])
    .then(employeeInfo => {

        let { name, id, email, role, github, school, addMoreEmployees } = employeeInfo; 
        let teamMember; 

        if (role === "Engineer") {
            teamMember = new Engineer (name, id, email, github);

        } else if (role === "Intern") {
            teamMember = new Intern (name, id, email, school);
        }

        cardArray.push(teamMember); 

        if (addMoreEmployees) {
            return newEmployee(cardArray); 
        } else {
            return cardArray;
        }
    })

};


// generate HTML file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

newManager()
  .then(newEmployee)
  .then(cardArray => {
    return createHTML(cardArray);
  })
  .then(HTMLversion => {
    return writeFile(HTMLversion);
  })
  .catch(err => {
 console.log(err);
  });