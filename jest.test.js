const shipFactory = require("./src/ship");

test("return an object containing length, hits, and two methods", () => {
  const newShip = shipFactory(5);

  expect(newShip.length).toBe(5);
  expect(newShip.hits).toBe(0);
  expect(newShip.isSunk()).toBe(false);
  expect(newShip.hit()).toBe(0);
  //after calling the hit method once, the value gets updated.
  expect(newShip.hit()).toBe(1);
});
