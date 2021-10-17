const { test, expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("Can instantiate Employee instance", () => {
    const newEmployee = new Employee()
    expect(typeof(newEmployee)).toBe("object")
})

test("Can set name with constructors", () => {
    const name = "mehdi"
    const newEmployee = new Employee(name)
    expect(newEmployee.name).toBe(name)
})