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
        createTeam()

    })
}

    internPrompt = () => {
        inquirer.prompt([
            {   
                type: "input",
                name: "internName",
                message: "What is your name?"
            },
            {   
                type: "input",
                name: "internId",
                message: "What is your ID?"
            },
            {   
                type: "input",
                name: "internEmail",
                message: "What is your email?"
            },
            {   
                type: "input",
                name: "internSchool",
                message: "What is your school name?"
            }
        ])
    .then(response => {
        const internInstance = new Manager(response.internName, response.internId, response.internEmail, response.internSchool)
        teamArray.push(internInstance)
        createTeam()

    })
}
    createTeam = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "createTeam",
                message: "Would role would you like to add?",
                choices: ["Engineer", "Intern", "Manager", "No members"]
            }
        ]).then(response => {
            switch(response.createTeam) {
                case "Engineer": 
                // callEngineer function here
                break;

                case "Intern": 
                internPrompt()
                break;

                case "Manager": 
                managerPrompt()
                break;

                default: 
                createTeamCards()
            }
        })
    }



    managerPrompt()

    createTeamCards = () => {
        fs.writeFileSync(distFile, renderTeam(teamArray), "utf-8", err => {
            console.log(err)
        }) 
    }
}


runApp()