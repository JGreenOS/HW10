//tests employee 

const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");


test("can make new employee object", () => {
    const test1 = new Employee();
    expect(typeof(test1)).toBe("object");

});

test("id is set correctly", () => {
    const testid = 33;
    const test2 = new Employee(testid);
    expect(test2.id).toBe(testid);
});

test("name set with constructor", () => {
    const name = "SallySue";
    const test3 = new Employee(33, name);
    expect(test3.name).toMatch(name);
});

test("email is set correctly", () => {
    const email = "test@test.com";
    const testFour = new Employee(33, "SallySue", email);
    expect(testFour.email).toMatch(email);
});

test("getId returns the id", () => {
    const getId = 33;
    const testFive = new Employee(getId);
    expect(testFive.getId()).toBe(getId);
});

test("getName returns the name", () => {
const getName = "SallySue";
const test6 = new Employee(33, getName);
expect(test6.getName()).toBe(getName); 
});

test("getEmail returns email", () => {
const getEmail = "test@test.com";
const test7 = new Employee(33, "SallySue", getEmail);
expect(test7.getEmail()).toBe(getEmail);

});