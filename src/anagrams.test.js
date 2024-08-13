const anagrams = require("./anagrams");

describe("anagrams()", () => {
  test("test should return true for strings which are anagrams", () => {
    const stringOne = "listen";
    const stringTwo = "silent";
    const result = anagrams(stringOne, stringTwo);
    const expectedOutput = true;
    expect(result).toBe(expectedOutput);
  });
  test("test should return false for strings which are not anagrams", () => {
    const stringOne = "fussy";
    const stringTwo = "silent";
    const result = anagrams(stringOne, stringTwo);
    const expectedOutput = false;
    expect(result).toBe(expectedOutput);
  });
  test("test should return false when passing equal length strings", () => {
    const stringOne = "tailor";
    const stringTwo = "silent";
    const result = anagrams(stringOne, stringTwo);
    const expectedOutput = false;
    expect(result).toBe(expectedOutput);
  });
});
