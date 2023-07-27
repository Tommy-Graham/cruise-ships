const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Itinerary);
    });

    it('stores a array of ports', () => {
        const liverpool = new Port('Liverpool');
        const belfast = new Port('Belfast');

        const itinerary = new Itinerary([liverpool, belfast]);

        expect(itinerary.ports).toEqual([liverpool,belfast]);
    })
})