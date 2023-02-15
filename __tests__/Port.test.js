const Port = require("../src/Port.js");

describe("Port", () => {
  let port;
  let ship;
  beforeEach(() => {
    port = new Port("Dover");
    ship = {};
  });

  xit("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  xit("current port", () => {
    const port = new Port("Dover");

    expect(port.name).toBe("Dover");
  });

  xit("can add a ship", () => {
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });

  xit("can remove a ship", () => {
    port.addShip(ship);
    port.removeShip(ship);
    expect(port.ships).toEqual([]);
  });
});
