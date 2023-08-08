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
            liverpool = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Liverpool',
                ships: []
              };

            dublin = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dublin',
                ships: []
              };

            itinerary = {
                ports: [liverpool, dublin]
            };
            
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
            expect(liverpool.removeShip).toHaveBeenCalledWith(ship);
        });
        
        it('gets added to port on instantiation', () => {
            
        
            expect(liverpool.addShip).toHaveBeenCalledWith(ship);
        });
        it('can dock at a different port', () => {
    
            ship.setSail();
            ship.dock();
    
            expect(dublin.addShip).toHaveBeenCalledWith(ship)
            expect(liverpool.removeShip).toHaveBeenCalledWith(ship);
        })
        it('can\'t sail further than its itinerary', () => {
            
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    });
});


