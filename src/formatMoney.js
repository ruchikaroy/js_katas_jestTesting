// Write a function that takes a number (amount) and returns the number formatted into pounds sterling.
// Amounts should be a string with the £ symbol in front:

function formatMoney(num) {
  return "£" + num.toFixed(2);
}
module.exports = formatMoney;
