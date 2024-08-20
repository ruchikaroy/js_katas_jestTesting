function modulo(n) {
  if (typeof n === "string") {
    return NaN;
  }
  if (Number.isInteger(n)) {
    return Math.sqrt(n);
  }
  return Number(Math.sqrt(n).toFixed(2));
}
module.exports = modulo;
