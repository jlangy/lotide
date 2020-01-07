const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = sentence => {
  sentenceLetters = sentence.replace(/[^a-zA-Z]/g, "");
  for (letter of sentenceLetters){
    console.log(letter);
  }
}
