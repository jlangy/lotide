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

const map = (array, callback) => {
  const results = [];
  for(let item of array){
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5];
const empty = [];

assertArraysEqual(words.map(word => word.length), [6,7,2,5,3]);
assertArraysEqual(nums.map(num => num * 2), [2,4,6,8,10]);
assertArraysEqual(empty.map(word => word.length), []);

module.exports = map;
