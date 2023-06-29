import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from ".";

//Tests for capitalize function

test("works with lowercase strings", () => {
  expect(capitalize("black")).toBe("Black");
});

test("works with uppercase strings", () => {
  expect(capitalize("BLACK")).toBe("BLACK");
});

test("works when the first letter is in lowercase and the rest are uppercase", () => {
  expect(capitalize("bLACK")).toBe("BLACK");
});

test("returns error when input is not a string", () => {
  expect(capitalize(1)).toBe("Error");
});

test("returns the same string when the first character is not a letter", () => {
  expect(capitalize("1fortheroad")).toBe("1fortheroad");
});

//Tests for reverseString function

test("works with lowercase strings", () => {
  expect(reverseString("blob")).toBe("bolb");
});

test("works with uppercase strings", () => {
  expect(reverseString("BLOB")).toBe("BOLB");
});

test("works with a string of numbers", () => {
  expect(reverseString("1234")).toBe("4321");
});

test("works with a string of letters and numbers", () => {
  expect(reverseString("a1b2c3")).toBe("3c2b1a");
});

test("works with a string of random characters", () => {
  expect(reverseString("}12-abc34{@d")).toBe("d@{43cba-21}");
});

test("returns Error when input is not a string", () => {
  expect(reverseString(234)).toBe("Error");
});

//Tests for calculator

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

//Tests for caesarCipher

test("works with lowercase characters with a shift of 1", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("works with uppercase characters with a shift of 1", () => {
  expect(caesarCipher("DEFEND THE EAST WALL OF THE CASTLE", 1)).toBe(
    "EFGFOE UIF FBTU XBMM PG UIF DBTUMF"
  );
});

test("works with both lowercase and uppercase characters with a shift of 1", () => {
  expect(caesarCipher("AbC", 1)).toBe("BcD");
});

test("works when a letter is the letter z and a shift of 1", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("works with a shift of 4", () => {
  expect(caesarCipher("a", 4)).toBe("e");
});

test("returns error when shift is negative", () => {
  expect(caesarCipher("abc", -1)).toBe("Error");
});

test("returns undefined when input is not a string", () => {
  expect(caesarCipher(12, 1)).toBe(undefined);
});

test("returns error when shift is not a number", () => {
  expect(caesarCipher("abc", "1")).toBe("Error");
});

//Tests for analyzeArray

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
