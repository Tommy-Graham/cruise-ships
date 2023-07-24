function Ship(currentPort) {
    this.currentPort = currentPort;
}

Ship.prototype.setSail = function() {
    return this.currentPort = false;
}

Ship.prototype.dock = function(port) {
    this.currentPort = port;
}

module.exports = Ship;