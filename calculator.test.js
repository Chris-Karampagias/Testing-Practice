import { calculator } from ".";

// Tests for calculator.add

test("works with integers>0", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("works with integers >=0", () => {
  expect(calculator.add(0, 2)).toBe(2);
});

test("works with negative integers", () => {
  expect(calculator.add(-1, 2)).toBe(1);
});

test("works with floats", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("returns undefined if the input is not a number", () => {
  expect(calculator.add("hello", 1)).toBe(undefined);
});

//Tests for calculator.subtract

test("works with integers>0", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("works with integers >=0", () => {
  expect(calculator.subtract(0, 2)).toBe(-2);
});

test("works with negative integers", () => {
  expect(calculator.subtract(-1, 2)).toBe(-3);
});

test("works with floats", () => {
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

test("returns undefined if the input is not a number", () => {
  expect(calculator.subtract("hello", 1)).toBe(undefined);
});

//Tests for calculator.divide

test("works with integers>0", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test("works with integers >=0", () => {
  expect(calculator.divide(0, 2)).toBe(0);
});

test("works with negative integers", () => {
  expect(calculator.divide(-2, 2)).toBe(-1);
});

test("works with floats", () => {
  expect(calculator.divide(0.1, 0.2)).toBeCloseTo(0.5);
});

test("return Error when the divisor is 0", () => {
  expect(calculator.divide(2, 0)).toBe("Error");
});

test("returns undefined if the input is not a number", () => {
  expect(calculator.divide("hello", 1)).toBe(undefined);
});

//Tests for calculator.multiply

test("works with integers>0", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("works with integers >=0", () => {
  expect(calculator.multiply(0, 2)).toBe(0);
});

test("works with negative integers", () => {
  expect(calculator.multiply(-2, 2)).toBe(-4);
});

test("works with floats", () => {
  expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
});

test("returns undefined if the input is not a number", () => {
  expect(calculator.multiply("hello", 1)).toBe(undefined);
});
