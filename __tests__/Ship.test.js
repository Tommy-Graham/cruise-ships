const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    it('can be instantiated', () => {
        //expect(new Ship()).toBeInstanceOf(Object);
        const port = new Port('Liverpool');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const port = new Port('Liverpool');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
      
    });

    it('can set sail', () => {
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        //expect(ship.previousPort).toBe(port);
    });

    it('can dock at a different port', () => {
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin])
        const ship = new Ship(itinerary);
        

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(dublin)
    })

    it('can\'t sail further than its itinerary', () => {
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        const itinerary = new Itinerary([liverpool, dublin]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
});

