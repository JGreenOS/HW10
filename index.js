const { EmptyError } = require("rxjs")

//pull in all classes
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
//pull in utilties
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const util = require('util');
const render = require("./src/templatehelpercode");
//const render = require( enter the template name here when the array is built out)
const { validate } = require("@babel/types");

//arrays to hold information
const writeFileAsync = util.promisify(fs.writeFileSync);
const people = [];
const ids = [];

//output directory will need to go here
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");



//start team

//workflow - start with manager, add choice for next role of employee.  Add engineer and intern
const startApp = () => {

    console.log("Answer the questions to begin building the team. You will start with the manager first");
    const managerData = () => {
        inquirer.prompt(
            [
                {
                    type: "number",
                    message: "Enter the employee number",
                    name: "employeeNumber",
                },

                {
                    type: "input",
                    message: "Enter the manager's first and last name",
                    name: "managerName",
                },
                {
                    type: "input",
                    message: "Enter the manager's email address",
                    name: "managerEmail",
                },
                {
                    type: "number",
                    message: "Enter the manager's office number",
                    name: "managerOffice",
                },



            ])
            .then(answers => {
                const manager = new Manager(answers.employeeNumber, answers.managerName, answers.managerEmail, answers.managerOffice)
                people.push(manager)
                ids.push(answers.employeeNumber);
                addTeamMember();
            });
    }
    const addTeamMember = () => {
        inquirer.prompt(
            [
                {
                    type: "list",
                    name: "role",
                    message: "Choose a role. If data entry is complete, select Create Team Roster",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Data Entry Complete, Create Team Roster please",
                    ]
                }
            ]
        )
            .then(choice => {
                switch (choice.role) {
                    case "Engineer":
                        engineerData();
                        break;
                    case "Intern":
                        internData();
                        break;
                    default: makeRoster();
                }
            });

    }
    const engineerData = () => {
        inquirer.prompt(
            [
                {
                    type: "number",
                    name: "engineerId",
                    message: "Enter the Engineer's employee id"
                },
                {
                    type: "input",
                    name: "engineerName",
                    message: "Enter the Engineer's name"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Enter the Engineer's Email Address"
                },
                {
                    type: "input",
                    name: "engineerGitHub",
                    message: "Enter the Engineer's GitHub username"
                },
            ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerId, answers.engineerName, answers.engineerEmail, answers.engineerGitHub)
                people.push(engineer)
                ids.push(answers.engineerId);
                addTeamMember();
            });
    }
    const internData = () => {
        inquirer.prompt(
            [
                {
                    type: "number",
                    message: "Enter the employee number",
                    name: "employeeNumber",
                },

                {
                    type: "input",
                    message: "Enter the intern's first and last name",
                    name: "internName",
                },
                {
                    type: "input",
                    message: "Enter the intern's email address",
                    name: "internEmail",
                },
                {
                    type: "input",
                    message: "Enter the intern's current school",
                    name: "internSchool",
                },



            ])
            .then(answers => {
                const intern = new Intern(answers.employeeNumber, answers.internName, answers.internEmail, answers.internSchool)
                people.push(intern)
                ids.push(answers.employeeNumber);
                addTeamMember();
            });
    }
    function makeRoster() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
      fs.writeFileSync(outputPath, render(people), "utf-8");
    };

    managerData();

}
startApp();
