// Write a function that takes a number (n) and returns the square root of that number.

function squareRoot(n) {
  if (typeof n === "string") {
    return NaN;
  }
  if (Number.isInteger(n)) {
    return Math.sqrt(n);
  }
  return Number(Math.sqrt(n).toFixed(2));
}
module.exports = squareRoot;
