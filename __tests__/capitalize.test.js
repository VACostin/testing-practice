import capitalize from "../src/capitalize";

test("kapa => Kapa", () => {
  expect(capitalize("kapa")).toBe("Kapa");
});