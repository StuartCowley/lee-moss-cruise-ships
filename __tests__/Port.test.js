const Port = require("../src/Port.js");

describe("Port", () => {
  xit("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  xit("current port", () => {
    const port = new Port("Dover");

    expect(port.name).toBe("Dover");
  });
});
