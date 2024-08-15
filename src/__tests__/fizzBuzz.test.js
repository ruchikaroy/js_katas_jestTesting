const fizzBuzz = require("../fizzBuzz");

describe("fizzBuzz()", () => {
  test("should return NaN if the passed input is not a number", () => {
    const input = "string";
    const result = fizzBuzz(input);
    const expectedOuput = NaN;
    expect(result).toBe(expectedOuput);
  });
  test("should return 'Fizz' if the passed input is divisible by 3 and not by 5", () => {
    const input = 12;
    const result = fizzBuzz(input);
    const expectedOuput = "Fizz";
    expect(result).toBe(expectedOuput);
  });
  test("should return 'Buzz' if the passed input is divisible by 5 and not by 3", () => {
    const input = 10;
    const result = fizzBuzz(input);
    const expectedOuput = "Buzz";
    expect(result).toBe(expectedOuput);
  });
  test("should return 'FizzBuzz' if the passed input is divisible by 5 and 3", () => {
    const input = 15;
    const result = fizzBuzz(input);
    const expectedOuput = "FizzBuzz";
    expect(result).toBe(expectedOuput);
  });
  test("should return 'Invalid Number' if the passed input is not divisible by 3 or 5 ", () => {
    const input = 22;
    const result = fizzBuzz(input);
    const expectedOuput = "Invalid Number";
    expect(result).toBe(expectedOuput);
  });
});
