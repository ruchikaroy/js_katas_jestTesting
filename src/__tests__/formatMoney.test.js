const formatMoney = require("../formatMoney");

describe("formatMoney()", () => {
  test("should be a function", () => {
    expect(typeof formatMoney).toBe("function");
  });
  test("should return a string that begins with £", () => {
    const input = 2.33;
    const result = formatMoney(input);
    const expectedOutput = "£2.33";
    expect(result).toBe(expectedOutput);
  });
  test("should be rounded to 2 decimal places", () => {
    const input = 2.338;
    const result = formatMoney(input);
    const expectedOutput = "£2.34";
    expect(result).toBe(expectedOutput);
  });
  test("should always have 2 decimal numbers even if they are zeroes", () => {
    const input = 1;
    const result = formatMoney(input);
    const expectedOutput = "£1.00";
    expect(result).toBe(expectedOutput);
  });
});
