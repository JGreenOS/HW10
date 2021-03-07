//file for manager, inherits from Employee and adds office number

const Employee = require("./Employee")

class Manager extends Employee {
constructor (id, name, email, offNum) {
    super(id, name, email);
    this.offNum = offNum;
};

getRole() {
    return "Manager"
};

getoffNum() {
    return this.offNum;
}
};

module.exports = Manager;