const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = sentence => {
  const letterCount = {}
  sentenceLetters = sentence.replace(/[^a-zA-Z]/g, "").toLowerCase();
  for (letter of sentenceLetters){
    if(letter in letterCount){
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}

console.log(countLetters('ssssssSSSSSSSSSSsssssssssss'));

module.exports = countLetters;