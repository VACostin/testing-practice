const capitalize = require("../capitalize");

test("kapa => Kapa", () => {
  expect(capitalize("kapa")).toBe("Kapa");
});