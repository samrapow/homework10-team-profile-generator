const Employee = require("../employees/employee.js");

class Manager extends Employee {
    constructor(name, employeeID, emailAddress, officeNumber) {
        super(name, employeeID, emailAddress);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return(this.officeNumber);
    }

    getJob() {
        return 'Manager';
    }
};

module.exports = Manager;