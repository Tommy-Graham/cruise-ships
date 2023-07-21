function Ship(startingPort) {
    this.name = jest.fn();
    this.startingPort = startingPort
} 

module.exports = Ship;