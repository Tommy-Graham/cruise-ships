const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');


describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        //const ship = new Ship('Liverpool');
        const port = new Port('Liverpool');
        const ship = new Ship(port);

        expect(ship.currentPort).toBe(port);
      //expect(ship.currentPort).toBe('Liverpool');
    });

    it('can set sail', () => {
        const port = new Port('Liverpool')
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it('can dock at a different port', () => {
        const liverpool = new Port('Liverpool');
        const ship = new Ship(liverpool);

        const dublin = new Port('Dublin');
        ship.dock(dublin);

        expect(ship.currentPort).toBe(dublin)
    })
});

