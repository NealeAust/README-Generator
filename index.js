// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install the project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your application?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions for your project:"
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github address?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "list",
        name: "license",
        message: "What software license will your project use?",
        choices: ["None", "MIT", "ISC", "BSD", "Apache-2.0"],
    }];

// TODO: Create a function to write README file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("README file created")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
