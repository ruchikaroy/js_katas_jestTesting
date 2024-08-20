// Write a function that takes two numbers (m and n) and returns the result of raising m to the power of n.

function raiseToPower(m, n) {
  let value = 1;

  for (let i = 0; i < n; i++) {
    value = value * m;
  }
  return value;
}
module.exports = raiseToPower;
