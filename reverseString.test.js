import { reverseString } from ".";

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
