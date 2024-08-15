const isPalindrome = require("../palindrome");

describe("isPalindrome()", () => {
  test("should return an empty string when empty string passed", () => {
    const input = "";
    const result = isPalindrome(input);
    const expectedOutput = "";
    expect(result).toBe(expectedOutput);
  });
  test("should return true if strings reads the same from left to right and vice-versa", () => {
    const input = "madam";
    const result = isPalindrome(input);
    const expectedOutput = true;
    expect(result).toBe(expectedOutput);
  });
});
