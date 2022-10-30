// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide install instructions for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information for your project.",
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide credits (contributors) for your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select licensing for your project.",
        choices: ['Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'CDDL-1.0', 'EPL-2.0', 'GPL-2.0', 'LGPL-3.0', 'MIT', 'MPL-2.0', 'N/A'],
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide testing instructions for your project.",
    },
    {
        type: "input",
        name: "contact",
        message: "Please provide a link to your GitHub account.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (error) {
        error ? console.log(error) : console.log("Success! Your project README has been generated.")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            console.log(JSON.stringify(data, null, " "));
            writeToFile("./Example/README.md", data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
