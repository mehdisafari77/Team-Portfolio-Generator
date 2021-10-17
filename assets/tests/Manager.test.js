const Manager = require("../lib/Manager")

test("Can set office number", () => {
    const testOfficeNumber = 12
    const newManager = new Manager("mehdi", 1, "mehdi@gmail.com", testOfficeNumber)
    expect(newManager.officeNumber).toBe(testOfficeNumber)
})

test("getRole() return \"Manager\"", () => {
    const testManager = "Manager"
    const newManager = new Manager("mehdi", 1, "mehdi@gmail.com", "GithubUser")
    expect(newManager.getRole()).toBe(testManager)
})

test("getOfficeNumber() gets office number", () => {
    const testManager = "Manager"
    const newManager = new Engineer("mehdi", 1, "mehdi@gmail.com", testOfficeNumber)
    expect(newManager.getGithub()).toBe(testManager)
})
