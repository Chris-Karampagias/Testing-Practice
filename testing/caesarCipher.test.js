import { caesarCipher } from "../index";

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
