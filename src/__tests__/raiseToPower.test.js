const raiseToPower = require("../raiseToPower");

describe("raiseToPower()", () => {
  test("should be a function", () => {
    expect(typeof raiseToPower).toBe("function");
  });
  test("should return m to the nth power", () => {
    expect(raiseToPower(2, 1)).toEqual(2);
    expect(raiseToPower(2, 2)).toEqual(4);
    expect(raiseToPower(2, 3)).toEqual(8);
  });
});
