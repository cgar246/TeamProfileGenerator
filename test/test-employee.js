const employee = require ("../lib/Employee");
test ("calling employee to return New employee info", () => {
    var newEmp = new Employee (1,"name","email")
    expect(newEmp.id).toBeGreaterThan(0);
    expect(newEmp.name).toMatch('Oscar');
    expect(newEmp.email).toMatch('Oscar@mail.com');
    expect(newEmp.getRole()).toMatch('Employee');
} )