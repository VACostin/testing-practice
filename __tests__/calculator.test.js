const calculator = require("../calculator");

const val1 = 2
const val2 = 2
const result = 4;

test ("2 + 2 = 4", () => {
    expect(calculator.add(val1, val2)).toBe(result);
})

test ("2 + 2 = 4", () => {
    expect(calculator.subtract(2, 2)).toBe(0);
})

test ("2 + 2 = 4", () => {
    expect(calculator.divide(2, 2)).toBe(1);
})

test ("2 + 2 = 4", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
})