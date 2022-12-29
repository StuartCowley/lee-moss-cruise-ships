class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
    this.previousPort = null;
  }
  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }
  dock(port) {
    this.currentPort = "Calais";
  }
}

class Port {
  constructor(name) {
    this.name = name;
  }
}

module.exports = Ship;
