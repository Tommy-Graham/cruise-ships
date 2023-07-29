const Port = require('../src/Port.js');


describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name property', () => {
        const port = new Port('Liverpool');

        expect(port.name).toBe('Liverpool');
    })

    it('can add a ship', () => {
        const port = new Port('Liverpool');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        const port = new Port('Liverpool');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    })

    
})