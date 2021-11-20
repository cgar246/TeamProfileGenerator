const manager = require("../lib/Manager");
test('Creates a Manager object', () => {
    const miManager = new Manager (1,"name","email",70);
    expect(miManager.id).toBeGreaterThan(0);
    expect(miManager.name).toBe('Tony');
    expect(miManager.email).toBe('zapple@mail.com');
    expect(miManager.officeNumber).toBeGreaterThan(0);
    expect(miManager.getRole()).toBe('Manager');
});