// Write a function that takes a string and returns the middle character for an odd-length string, or the two middle characters for an even-length string.

function getMiddle(string) {
  const length = string.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  }
  return string[middleIndex];
}
module.exports = getMiddle;
