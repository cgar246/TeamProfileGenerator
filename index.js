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
        name:"name",
        message:"What is your name"
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
const teamArray = [];

function createManager(employeeInfo) {
    console.log(employeeInfo)
    inquirer.prompt(manager).then((answer) => {
        console.log(answer)
        const miManager = new Manager (employeeInfo.id, employeeInfo.name, employeeInfo.email, answer.office);
        teamArray.push(miManager);
        console.log(teamArray)
        askQuestion();
    });
}

function createEngineer(employeeInfo) {
    console.log(employeeInfo)
    inquirer.prompt(engineer).then((answer) => {
        console.log(answer)
        const newEngineer = new Engineer (employeeInfo.id, employeeInfo.email, answer.github);
        teamArray.push(newEngineer);
        askQuestion();
    });
}

function createIntern(employeeInfo) {
    console.log(employeeInfo)
    inquirer.prompt(intern).then((answer) => {
        console.log(answer)
        const newIntern = new Intern (employeeInfo.id, employeeInfo.email, answer.school);
        teamArray.push(newIntern);
        askQuestion();
    });
}
function creatingTeam(){

}
function askQuestion() {
    inquirer.prompt([{
        type:"list",
        name:"finalmessage",
        message:"Would you like to make another employee or are you done",
        choices:["Make another", "I am done"]
    }]).then((answer) => {
        if(answer.finalmessage == "I am done") {
            creatingTeam()
        }else {
            // reask the questions and enter entry based on role and ask again if 
            newRole();
        }
    })
}
function newRole() {
    inquirer.prompt(question).then((answer) => {
        console.log(answer.role)
        if (answer.role.toLowerCase() == "manager") {
                createManager(answer);
        } else if (answer.role.toLowerCase() == "engineer") {
                console.log(answer)
                createEngineer(answer); 
        } else if (answer.role.toLowerCase() == "intern"){
                console.log(answer)
                createIntern(answer);
        }
        }) 
}
    newRole();