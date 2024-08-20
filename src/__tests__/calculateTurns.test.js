const calculateTurns = require("../calculateFullTurns");

describe("calculateTurns()", () => {
  test("should be a function", () => {
    expect(typeof calculateTurns).toBe("function");
  });
  test("should return 0 if given input is less than 360 degrees", () => {
    const inputDegrees = 200;
    const result = calculateTurns(inputDegrees);
    const expectedOutput = 0;
    expect(result).toBe(expectedOutput);
  });
  test("should return 1 if given input is 360 degrees", () => {
    const inputDegrees = 360;
    const result = calculateTurns(inputDegrees);
    const expectedOutput = 1;
    expect(result).toBe(expectedOutput);
  });
  test("should return correct number of full turns as a whole number", () => {
    const inputDegrees = 720;
    const result = calculateTurns(inputDegrees);
    const expectedOutput = 2;
    expect(result).toBe(expectedOutput);
  });
  test("should return correct number of full turns as a whole number for multiple full turns", () => {
    const inputDegrees = 400;
    const result = calculateTurns(inputDegrees);
    const expectedOutput = 1;
    expect(result).toBe(expectedOutput);
  });
});
