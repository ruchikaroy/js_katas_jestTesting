const converToCamelCase = require("../convertToCamelCase");

describe("convertToCamelCase()", () => {
  test("should be a function", () => {
    expect(typeof converToCamelCase).toBe("function");
  });
  test("should return a string with the first character being lowercase", () => {
    const input = "Hello";
    const result = converToCamelCase(input);
    const expectedOutput = "hello";
    expect(result).toBe(expectedOutput);
  });
  test("should return a string without spaces and in camel case", () => {
    const input = "hello northcoders";
    const result = converToCamelCase(input);
    const expectedOutput = "helloNorthcoders";
    expect(result).toBe(expectedOutput);
  });
});
