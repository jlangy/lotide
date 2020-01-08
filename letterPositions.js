const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return false;
  let equalArrays = true;
  arr1.forEach((el, i) => {
    if (el !== arr2[i])
      equalArrays = false;
  });
  return equalArrays;
};

const letterPositions = sentence => {
  const results = {};
  lowerCaseSentence = sentence.toLowerCase();
  const letters = lowerCaseSentence.split('');
  letters.forEach((letter,i) => {
    if(letter in results){
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  });
  return results;
}

const letterPosition = letterPositions('hello');
assertArraysEqual(letterPosition['h'], [0]);
assertArraysEqual(letterPosition['e'], [1]);
assertArraysEqual(letterPosition['l'], [2,3]);
assertArraysEqual(letterPosition['o'], [4]);
