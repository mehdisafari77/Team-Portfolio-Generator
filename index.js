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
    
    // Manager prompt starts here
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

    // Intern prompt starts here
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
        const internInstance = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        teamArray.push(internInstance)
        createTeam()

    })
}

    // Engineer prompt starts here
    engineerPrompt = () => {
        inquirer.prompt([
            {   
                type: "input",
                name: "engineerName",
                message: "What is your name?"
            },
            {   
                type: "input",
                name: "engineerId",
                message: "What is your ID?"
            },
            {   
                type: "input",
                name: "engineerEmail",
                message: "What is your email?"
            },
            {   
                type: "input",
                name: "engineerGithub",
                message: "What is your Github username?"
            }
        ])
    .then(response => {
        const engineerInstance = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        teamArray.push(engineerInstance)
        createTeam()

    })
}

    // Create team starts here
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
                engineerPrompt()
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


    createTeam()

    // Create team cards starts here
    createTeamCards = () => {
        fs.writeFileSync(distFile, renderTeam(teamArray), "utf-8", err => {
            console.log(err)
        }) 
    }
}


runApp()