const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
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
            expect(ship).toBeInstanceOf(Object);
        });
        
        it('has a starting port', () => {
            
        
            expect(ship.currentPort).toBe(liverpool);
        });

        it('can set sail', () => {
            
            ship.setSail();
        
            expect(ship.currentPort).toBeFalsy();
            expect(liverpool.ships).not.toContain(ship);
        });
        
        it('gets added to port on instantiation', () => {
            
        
            expect(liverpool.ships).toContain(ship);
        });
        it('can dock at a different port', () => {
    
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(dublin)
            expect(dublin.ships).toContain(ship);
        })
        it('can\'t sail further than its itinerary', () => {
            
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    });
});


