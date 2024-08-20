function raiseToPower(m, n) {
  let value = 1;

  for (let i = 0; i < n; i++) {
    value = value * m;
  }
  return value;
}
module.exports = raiseToPower;
