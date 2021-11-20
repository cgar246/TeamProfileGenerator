const intern = require("../lib/Intern");
test('new intern name test', () =>{
    const newIntern = new Manager (1,"name","email","CSU East Bay");
    expect(newIntern.id).toBeGreaterThan(0);
    expect(newIntern.name).toBe('Matthew');
    expect(newIntern.email).toBe('Matthew@mail.com');
    expect(newIntern.school).toEqual('CSU East Bay');
    expect(newIntern.getRole()).toEqual('Intern');
});