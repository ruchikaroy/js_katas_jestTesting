// Write a function that takes a string and returns the string in camel case. This means all spaces should be removed, and every word other than the first should be capitalised.

function converToCamelCase(string) {
  const stringArray = string.split(" ");
  let camelCasePhrase = stringArray[0].toLowerCase();
  for (let i = 1; i < stringArray.length; i++) {
    const firstLetter = stringArray[i][0].toUpperCase();
    const otherLetters = stringArray[i].slice(1).toLowerCase();
    camelCasePhrase = camelCasePhrase + firstLetter + otherLetters;
  }
  return camelCasePhrase;
}
module.exports = converToCamelCase;
