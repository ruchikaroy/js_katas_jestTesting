function anagrams(inputOne, inputTwo) {
  if (inputOne.length !== inputTwo.length) {
    return false;
  } else {
    const stringArrayOne = inputOne.split("").sort();
    const stringArrayTwo = inputTwo.split("").sort();
   
    if (stringArrayOne.join("") === stringArrayTwo.join("")) {
      return true;
    }
  }
  return false;
}
module.exports = anagrams;
