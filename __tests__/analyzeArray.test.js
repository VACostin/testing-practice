import analyzeArray from "../src/analyzeArray";

const array = [1, 8, 3, 4, 2, 6];
const object = {
  avg: 4,
  min: 1,
  max: 8,
  length: 6,
};

test("For [1, 8, 3, 4, 2, 6], \navg: 4 \nmin: 1\nmax: 8\nlength: 6", () => {
  expect(analyzeArray(array)).toMatchObject(object);
});
