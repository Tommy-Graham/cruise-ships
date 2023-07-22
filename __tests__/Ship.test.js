const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const ship = new Ship('Liverpool');

        expect(ship.startingPort).toBe('Liverpool');
    });

    it('can set sail', () => {
        const ship = new Ship('Liverpool');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
});

