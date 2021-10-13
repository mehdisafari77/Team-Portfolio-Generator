const Employee = require("./Employee")

class Intern extends Employee {
    constructor(school, id, email, name) {
        super(name, id, email)
        this.school = school
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school
    }

}

module.exports = Intern