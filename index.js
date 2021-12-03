const inquirer = require ("inquirer");
const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer")
const Intern = require ("./lib/Intern")

const question = [
    {
        type:"input", 
        name:"ID",
        message:"What is your employee ID"
    },
    {
        type:"input", 
        name:"email",
        message:"What is your email"
    },
    {
        type:"input", 
        name:"role",
        message:"What is your role"
    },
]
const engineer = [
    {
        type:"input", 
        name:"github",
        message:"What is your Github Username"
    },
]
const intern = [
    {
        type:"input", 
        name:"school",
        message:"What school did you go to"
    },
]
const manager = [
    {
        type:"input", 
        name:"office",
        message:"What is your office number"
    },
];
function createManager(employeeInfo) {
    console.log(employeeInfo)
    inquirer.prompt(manager).then((answer) => {
        console.log(answer)
        const miManager = new Manager ("id","name","email",answer.office);
    });
}

function createEngineer(employeeInfo) {
    console.log(employeeInfo)
    inquirer.prompt(engineer).then((answer) => {
        console.log(answer)
        const newEngineer = new Engineer (employeeInfo.id, employeeInfo.email, answer.github);
    });
}

function createIntern(employeeInfo) {
    console.log(employeeInfo)
    inquirer.prompt(intern).then((answer) => {
        console.log(answer)
        const newIntern = new Intern (employeeInfo.id, employeeInfo.email,answer.school);
    });
}

inquirer.prompt(question).then((answer) => {
    //console.log(answer)
    if (answer.role == "manager") {
            createManager(answer);
    } else if (answer.role == "engineer") {
        inquirer.prompt(engineer).then((answer) => {
            console.log(answer)
        });
    } else if (answer.role == "intern"){
        inquirer.prompt(intern).then((answer) => {
            console.log(answer)
        });
    }
    })