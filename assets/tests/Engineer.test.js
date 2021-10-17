const Engineer = require("../lib/Engineer")

test("Can set Github account", () => {
    const testUser = "GithubUser"
    const newEngineer = new Engineer("mehdi", 1, testUser)
    expect(newEngineer.name).toBe(testUser)
})

test("getRole() return \"Employee\"", () => {
    const testEmployee = "Employee"
    const newEmployee = new Engineer("mehdi", 1, "mehdi@gmail.com")
    expect(newEmployee.getRole()).toBe(testEmployee)
})

test("getGithub() gets Github username ", () => {
    const testUser = "GithubUser"
    const newEngineer = new Engineer("mehdi", 1, testUser)
    expect(newEngineer.getGithub()).toBe(testUser)
})
