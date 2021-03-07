//test file for intern
const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

//test school from constructor
test("get school from constructor", () => {
const school = "UM-Engineering";
const test1 = new Intern(33, "SallySue", "test@test.com", school);
expect(test1.school).toMatch(school);

});


//test role
test("getRole should return intern", () => {
    const role = "Intern";
    const test2 = new Intern (33, "SallySue", "test@test.com", "UM-Engineering");
    expect(test2.getRole()).toBe(role);
});

