const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor (id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
    getGithub () {
        return this.github
    }
    getIcon() {
        return '<i class="fas fa-glasses"></i>';}
}

module.exports = Engineer;