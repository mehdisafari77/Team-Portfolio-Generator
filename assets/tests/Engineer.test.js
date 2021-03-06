const Engineer = require("../lib/Engineer")

test("Can set Github account", () => {
    const testUser = "GithubUser"
    const newEngineer = new Engineer(testUser, 1, "mehdi@gmail.com", "mehdi")
    expect(newEngineer.github).toBe(testUser)
})

test("getRole() return \"Engineer\"", () => {
    const testEngineer = "Engineer"
    const newEngineer = new Engineer("mehdi", 1, "mehdi@gmail.com", "GithubUser")
    expect(newEngineer.getRole()).toBe(testEngineer)
})

test("getGithub() gets Github username", () => {
    const testUser = "GithubUser"
    const newEngineer = new Engineer(testUser, 1, "mehdi@gmail.com", "mehdi")
    expect(newEngineer.getGithub()).toBe(testUser)
})
