function isPalindrome(string) {
  if (string.length === 0) {
    return "";
  }
  const stringArray = string.split("");

  let start = 0;
  let end = stringArray.length - 1;

  while (start <= end) {
    if (stringArray[start] === stringArray[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}
module.exports = isPalindrome;
