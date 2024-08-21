const getMiddle = require("../getMiddle");

describe("getMiddle()", () => {
  test("should be a function", () => {
    expect(typeof getMiddle).toBe("function");
  });
  test("should return the middle character in an odd-length string", () => {
    const input = "cloud";
    const result = getMiddle(input);
    const expectedOutput = "o";
    expect(result).toBe(expectedOutput);
  });
  test("should return the middle two characters in an even-length string", () => {
    const input = "chin";
    const result = getMiddle(input);
    const expectedOutput = "hi";
    expect(result).toBe(expectedOutput);
  });
});
