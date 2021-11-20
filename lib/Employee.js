class Employee {
    constructor (id, name, email) {
        this.id = id;
        this.email = email;
        this.name = name;
    }
    getId () {
        return this.id;
    }
    getName () {
        return this.name;
    }
    getEmail () {
        return this.email;
    }
}