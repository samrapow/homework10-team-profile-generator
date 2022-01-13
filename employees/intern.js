const Employee = require("../employees/employee.js");

class Intern extends Employee {
    constructor(name, employeeID, emailAddress, school) {
        super(name, employeeID, emailAddress);
        this.school = school;
    }

    getSchool() {
        return(this.school);
    }

    getJob() {
        return 'Intern';
    }
};

module.exports = Intern;