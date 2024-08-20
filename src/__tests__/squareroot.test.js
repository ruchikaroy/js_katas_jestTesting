const modulo = require("../squareroot");

describe("module()", () => {
  test("should return NaN if the passed input is not an integer", () => {
    const input = "Hello";
    const result = modulo(input);
    const expectedOutput = NaN;
    expect(result).toBe(expectedOutput);
  });

  test("should be a function", () => {
    expect(modulo()).toBe(modulo());
  });
  test("test should return square root of n when square root is a whole integer", () => {
    const input = 4;
    const result = modulo(input);
    const expectedOutput = 2;
    expect(result).toBe(expectedOutput);
  });
});
test("test should return square root of n when square root is not a whole integer", () => {
  const input = 12.5;
  const result = modulo(input);
  const expectedOutput = 3.54;
  expect(result).toBe(expectedOutput);
});
