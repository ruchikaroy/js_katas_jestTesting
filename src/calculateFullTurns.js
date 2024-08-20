// Write a function that takes a number of degrees (degrees) and returns the number of full turns you can make with the provided degrees as a whole number.
// 1 full turn === 360 degrees.
// The result should be an integer, i.e. rounded to 0 decimal places.

function calculateTurns(degrees) {
  const oneFullTurn = 360;

  if (degrees < oneFullTurn) {
    return 0;
  }
  if (degrees === oneFullTurn) {
    return 1;
  } else {
    if (degrees > oneFullTurn) {
      const value = Math.floor(degrees / oneFullTurn);
      return Number(value);
    }
  }
}
module.exports = calculateTurns;
