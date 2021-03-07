//test for Engineer
const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

//github from constructor
test("get github from constructor", () => {
    const github = "MeMeGitHubUser";
    const test1 = new Engineer (33, "SallySue", "test@test.com", github);
    expect(test1.github).toBe(github);
});

//get github username
test("get github username", () => {
    const getGithub = "MeMeGitHubUser"
    const test2 = new Engineer (33, "SallySue", "test@test.com", getGithub);
    expect(test2.getGithub()).toBe(getGithub);
});


//correct role
test("get correct role from getRole", () => {
    const getRole = "Engineer";
    const test3 = new Engineer (33, "SallySue", "test@test.com", "MeMeGitHubUser");
    expect(test3.getRole()).toBe(getRole);
});
