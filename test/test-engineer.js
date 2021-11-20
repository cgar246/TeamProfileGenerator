const engineer = require("../lib/Engineer")
test('new engineer name test', () =>{
    const newEngineer = new Engineer (1,"name","email", "github");
    expect(newEngineer.id).toBeGreaterThan(0);
    expect(newEngineer.name).toBe('Elo');
    expect(newEngineer.email).toBe('elo@mail.com');
    expect(newEngineer.gitHub).toBe('zelo');
    expect(newEngineer.getRole()).toBe('Engineer');
});