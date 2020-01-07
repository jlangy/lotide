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

const middle = (arr) => {
  if (arr.length < 3)
    return [];
  if (arr.length % 2 === 0) {
    const firstMiddleIndex = arr.length / 2 - 1;
    return arr.slice(firstMiddleIndex, firstMiddleIndex + 2);
  } else {
    const middleIndex = (arr.length - 1) / 2;
    return arr.slice(middleIndex, middleIndex + 1);
  }
};

assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([2,3,2,4,5]), [2]);