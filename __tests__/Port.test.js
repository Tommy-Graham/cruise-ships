const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');
const Ship = require('../src/Ship.js');
describe('Port', () => {
    describe('with ships and an itinerary', () => {
        let ship;
        let liverpool;
        let dublin;
        let itinerary;

        beforeEach(() => {
            liverpool = new Port('Liverpool');
            dublin = new Port('Dublin');
            itinerary = new Itinerary([liverpool, dublin]);
            ship = new Ship(itinerary);
        });
        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
        it('has a name property', () => {

    
            expect(liverpool.name).toBe('Liverpool');
        })
        it('can add a ship', () => {
            const liverpool = new Port('Liverpool');
            const ship = jest.fn();
    
            liverpool.addShip(ship);
    
            expect(liverpool.ships).toContain(ship);
        });
        it('can remove a ship', () => {
            const liverpool = new Port('Liverpool');
            const titanic = jest.fn();
            const queenMary = jest.fn();
    
            liverpool.addShip(titanic);
            liverpool.addShip(queenMary);
            liverpool.removeShip(queenMary);
    
            expect(liverpool.ships).toEqual([titanic]);
        })




    });

    





})