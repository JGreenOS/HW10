//file for engineer, extends Employee

const Engineer = require("./employee");

class Engineer extends Employee {
    constructor (id, name, email, github) {
        super(id, name, email);
        this.github = github;
}

getRole () {
    return "Engineer";
}

getGithub () {
    return this.github;
}
}

module.exports = Engineer; 