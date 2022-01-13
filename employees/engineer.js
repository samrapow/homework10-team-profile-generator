const Employee = require("../employees/employee.js");

class Engineer extends Employee {
    constructor(name, employeeID, emailAddress, gitHub) {
        super(name, employeeID, emailAddress);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return(this.gitHub);
    }

    getJob() {
        return 'Engineer';
    }
};

module.exports = Engineer;