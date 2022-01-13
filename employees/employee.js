class Employee {
    constructor(name, employeeID, emailAddress) {
        this.name = name;
        this.employeeID = employeeID;
        this.emailAddress = emailAddress;
    };

    getName() {
        return(this.name);
    }

    getEmployeeID() {
        return(this.id);
    }

    getEmailAddress() {
        return(this.emailAddress);
    }

    getJob() {
        return 'Employee';
    }

};

module.exports = Employee;