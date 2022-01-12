const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const generatePage = require("./utils/team.js");
const writeFile = require('./utils/generate-page.js');

const teamMembers = []

const promptManager = () => {
    inquirer
    .prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please provide the name of the Team Manager.",
    },
    {
        type: "input",
        name: "managerID",
        message: "What is the Team Manager's employee ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is Team Manager's email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Team Manager's office number?",
    },
    ])
    .then((answers) => {
    const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
        teamMembers.push(manager)
        console.log(answers);
        promptMenu();
    });
};

const promptMenu = () => {
    inquirer
    .prompt([
    {
        type: "list",
        name: "menu",
        message: "Please select from one the choices below:",
        choices: [
            "Add an engineer.",
            "Add an intern.",
            "Finish building team.",
        ],
        },
    ])
    .then((answers) => {
        if (answers.menu === "Add an engineer.") {
        promptEngineer();
    } else if (answers.menu === "Add an intern.") {
        promptIntern();
    } else {
        var results = ""
        writeToFile("index.html", results)
    }
    });
};

const promptEngineer = () => {
    inquirer
    .prompt([
        {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
        },
        {
        type: "input",
        name: "engineerID",
        message: "What is the engineer's employee ID?",
        },
        {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
        },
        {
        type: "input",
        name: "engineerGitHub",
        message:
        "What is the engineer's GitHub username? (please leave out the @ symbol)",
        },
    ])
    .then((answers) => {
        const engineer = new Engineer (answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
        teamMembers.push(engineer)
        console.log(answers);
        promptMenu();
    });
};

const promptIntern = () => {
    inquirer
    .prompt([
        {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "internID",
        message: "What is the intern's employee ID?",
        },
        {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        },
    ])
    .then((answers) => {
        const intern = new Intern (answers.internName, answers.internID, answers.internEmail, answers.school)
        teamMembers.push(intern)
        console.log(answers);
        promptMenu();
    });
};

// write to html file
const writeToFile = () => {
    fs.writeFile("index.html", generatePage(teamMembers), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(
        "Your webpage has been created! Go to index.html and open in browser to check it out!"
    );
    }
});
};

// initialize app here
const init = () => {
    promptManager();
};

init();