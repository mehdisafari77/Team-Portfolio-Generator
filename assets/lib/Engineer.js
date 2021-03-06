const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(github, id, email, name) {
        super(name, id, email)
        this.github = github
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github
    }

}

module.exports = Engineer