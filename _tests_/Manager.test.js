//test file for Manager
//require
const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

//offNumber
test("get correct office number", () => {
const offNum = 1576;
const test4 = new Manager(33, "SallySue", "test@test.com", 1576);
expect(test4.offNum).toBe(offNum);

});

//getoffNumber
test("get offnum from get method", () => {
const getoffNum = 1576;
const test5 = new Manager (33, "SallySue", "test@test.com", getoffNum);
expect(test5.getoffNum()).toBe(getoffNum);

});

//getrole
test("get manager role", () => {
    const role = "Manager";
    const test7 = new Manager (33, "SallySue", "test@test.com", 1576);
    expect(test7.getRole()).toBe(role);
});