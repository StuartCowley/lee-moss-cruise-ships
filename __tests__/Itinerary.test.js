const Itinerary = require("../src/itinerary");

describe("Itinerary", () => {
  xit("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
});

xit("can have ports", () => {
  const dover = new Port("Dover");
  const calais = new Port("Calais");

  const itinerary = new Itinerary([dover, calais]);
  expect(itinerary.ports).toEqual([dover, calais]);
});
