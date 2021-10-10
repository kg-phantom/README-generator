// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub username? (Required)',
        validate: userNameInput => {
            if(userNameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            const validEmail = /\S+@\S+\.\S+/;
            if(validEmail.test(emailInput)) {
                return true;
            } else {
                console.log('\nPlease enter a valid email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: projectInput => {
            if(projectInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project: (Required)',
        validate: descInput => {
            if(descInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project? (Required)',
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please explain how to install your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please explain how to use your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'ISC', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should developers know about contributing to this project? (Required)',
        validate: contribInput => {
            if(contribInput) {
                return true;
            } else {
                console.log('Please explain how to contribute your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions/examples for this project? (Required)',
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log('Please give test instructions for your project!');
                return false;
            }
        }
    }
];

// Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, (err) => {
        if(err) throw err;
        console.log('Your README.md file has been created!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => generateMarkdown(answers))
        .then(data => {
            writeToFile(data);
        })
};

// Function call to initialize app
init();
