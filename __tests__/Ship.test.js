/* globals describe it expect */
const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  describe("Ship constructor", () => {
    xit("can be instantiated", () => {
      expect(Ship).toBeInstanceOf(Object);
    });

    xit("it has a starting port", () => {
      expect(ship.currentPort).toBe(dover);
    });

    xit("can set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });

    xit("can dock at a different port", () => {
      ship.setSail();
      ship.dock();

      expect(calais.ships).toContain(ship);
      expect(ship.currentPort).toBe("Calais");
    });

    xit("can't sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });

    xit("gets added to port on instantiation", () => {
      expect(dover.ships).toContain(ship);
    });
  });
});
