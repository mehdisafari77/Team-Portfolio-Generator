const Intern = require("../lib/Intern")

test("Can set school name", () => {
    const testSchoolName = "UCSF"
    const newIntern = new Intern(testSchoolName, 1, "mehdi@gmail.com", "mehdi" )
    expect(newIntern.school).toBe(testSchoolName)
})

test("getRole() return \"Intern\"", () => {
    const testIntern = "Intern"
    const newIntern = new Intern("mehdi", 1, "mehdi@gmail.com", "UCSF")
    expect(newIntern.getRole()).toBe(testIntern)
})

test("getSchool() gets school name", () => {
    const testSchoolName = "UCSF"
    const newIntern = new Intern(testSchoolName, 1, "mehdi@gmail.com", "mehdi" )
    expect(newIntern.getSchool()).toBe(testSchoolName)
})
