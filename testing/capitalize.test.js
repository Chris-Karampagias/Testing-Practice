import { capitalize } from "../index";

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
