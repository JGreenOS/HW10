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
//const render = require( enter the template name here)
const { validate } = require("@babel/types");

const people = [];

function mainfunction() {


    //start with manager
    function makeManager() {
        inquirer.prompt(
            [  //input manager id, name, email, officenumb
                {
                    type: 'input',
                    message: 'Enter the employee number',
                    name: 'EmployeeNumber',
                    validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
                },
                {
                    type: 'input',
                    message: 'Enter the first and last name of the manager',
                    name: 'ManagerName',
                    validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
                },
                {
                    type: 'input',
                    message: 'Enter the full email address of the manager',
                    name: 'ManagerEmailAddress',
                    validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },
                },

                {
                    type: 'number',
                    message: 'Enter the manager\'\s office number',
                    name: 'OfficeNumber',
                    validate: (value) => { if (value) { return true } else { return 'Required - Please input a value' } },

                },

            ]).then(answers => {
                const manager = new Manager(answers.EmployeeNumber, answers.ManagerName, answers.ManagerEmailAddress, answers.OfficeNumber);
                people.push(manager);
            });
    }
    //makeManager has to be inside of the main function for inquirer to run
    makeManager();
}


//create inquirer questions

//ask which role to input (engineer, intern or done)
//     {
//         type:'list',
//         message: 'Engineer or Intern?',
//         name: 'Role',
//         choices: ["Engineer", "Intern", "All Set - Build Team"],
//         when: function(UserInput) {
//             return 

//     },
// },






//if intern, goto intern questions

//if engineer, go to engineer questions

//is team done?
function makeHTML() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(people), "utf-8");
  }
makeHTML();
mainfunction();
//make HTML

userInput()
 .then((answers) => writeFileAsync('index.html', mainfunction(answers)))
 .then(() => console.log('Successfully wrote index.html file'))
.catch((err) => console.error(err));

module.exports = mainfunction;

