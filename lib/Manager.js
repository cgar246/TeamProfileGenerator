const Employee = require("./Employee");

class Manager extends Employee{
    constructor (id, name, email, office) {
        super(id, name, email);
        this.office = office;
    }
    getOffice () {
        return this.office
    }
    getIcon(){
        return '<i class="fas fa-coffee"></i>';
    }
}

module.exports = Manager;