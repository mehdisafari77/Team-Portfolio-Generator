const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs")
const path = require("path")


const dist = path.resolve(__dirname, "dist")
const distFile = path.join(dist, "team.html")
// require page template renderer here

teamArray = []

runApp = () =>  {
    managerPrompt = () => {
        inquirer.prompt([
            {   
                type: "input",
                name: "managerName",
                message: "What is your name?"
            },
            {   
                type: "input",
                name: "managerId",
                message: "What is your ID?"
            },
            {   
                type: "input",
                name: "managerEmail",
                message: "What is your email?"
            },
            {   
                type: "input",
                name: "officeNum",
                message: "What is your office number?"
            }
        ])
    .then(response => {
        const managerInstance = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNum)
        teamArray.push(managerInstance)
        // file create team function

    })
    }
}