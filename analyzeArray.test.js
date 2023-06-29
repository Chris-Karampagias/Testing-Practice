import { analyzeArray } from ".";

test("works with integers", () => {
  expect(analyzeArray([0, -4, -2])).toEqual({
    average: -2,
    min: -4,
    max: 0,
    length: 3,
  });
});

test("works if a number appears multiple times in the array", () => {
  expect(analyzeArray([0, 0, 3])).toEqual({
    average: 1,
    min: 0,
    max: 3,
    length: 3,
  });
});

test("returns error if an element is not a number", () => {
  expect(analyzeArray(["booo", 1, -2])).toBe("Error");
});
