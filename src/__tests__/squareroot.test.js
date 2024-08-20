const squareRoot = require("../squareroot");

describe("squareRoot()", () => {
  test("should return NaN if the passed input is not an integer", () => {
    const input = "Hello";
    const result = squareRoot(input);
    const expectedOutput = NaN;
    expect(result).toBe(expectedOutput);
  });

  test("should be a function", () => {
    expect(typeof squareRoot).toBe("function");
  });
  test("test should return square root of n when square root is a whole integer", () => {
    const input = 4;
    const result = squareRoot(input);
    const expectedOutput = 2;
    expect(result).toBe(expectedOutput);
  });
});
test("test should return square root of n when square root is not a whole integer", () => {
  const input = 12.5;
  const result = squareRoot(input);
  const expectedOutput = 3.54;
  expect(result).toBe(expectedOutput);
});
