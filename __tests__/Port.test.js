const Port = require('../src/Port.js');


describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name property', () => {
        const port = new Port('Liverpool');

        expect(port.name).toBe('Liverpool');
    })
})