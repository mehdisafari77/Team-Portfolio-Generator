const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager")

test("Can set office number", () => {
    const testOfficeNumber = 123
    const newManager = new Manager("mehdi", 1, "mehdi@gmail.com", testOfficeNumber)
    expect(newManager.officeNumber).toBe(testOfficeNumber)
})

test("getRole() return \"Manager\"", () => {
    const testManager = "Manager"
    const newManager = new Manager("mehdi", 1, "mehdi@gmail.com", 123)
    expect(newManager.getRole()).toBe(testManager)
})

test("getOfficeNumber() gets office number", () => {
    const testOfficeNumber = 123
    const newManager = new Manager("mehdi", 1, "mehdi@gmail.com", testOfficeNumber)
    expect(newManager.getOfficeNumber()).toBe(testOfficeNumber)
})
