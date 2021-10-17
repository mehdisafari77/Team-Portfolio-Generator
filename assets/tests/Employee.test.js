const { test, expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("Can instantiate Employee instance", () => {
    const newEmployee = new Employee()
    expect(typeof(newEmployee)).toBe("object")
})

test("Can set name", () => {
    const name = "mehdi"
    const newEmployee = new Employee(name)
    expect(newEmployee.name).toBe(name)
})

test("Can set email", () => {
    const testEmail = "mehdi@gmail.com"
    const newEmployee = new Employee("mehdi", 1, testEmail)
    expect(newEmployee.email).toBe(testEmail)
})

test("Can set id", () => {
    const testId = 1234
    const newEmployee = new Employee("mehdi", testId)
    expect(newEmployee.id).toBe(testId)
})

test("Can set id", () => {
    const testId = 1234
    const newEmployee = new Employee("mehdi", testId)
    expect(newEmployee.id).toBe(testId)
})
