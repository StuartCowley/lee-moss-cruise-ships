/* globals describe it expect */
const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  xit("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

xit("it has a starting port", () => {
  const port = new Port("Dover");
  const itinerary = new Itinerary([port]);
  const ship = new Ship(port);
  expect(ship.currentPort).toBe(port);
});

xit("can set sail", () => {
  const port = new Port("Dover");
  const itinerary = new Itinerary([port]);
  const ship = new Ship(port);
  ship.setSail();
  expect(ship.currentPort).toBeFalsy();
  expect(ship.previousPort).toBe(port);
});

xit("can dock at a different port", () => {
  const dover = new Port("Dover");
  const calais = new Port("Calais");
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail();
  ship.dock();

  expect(ship.currentPort).toBe("Calais");
});
