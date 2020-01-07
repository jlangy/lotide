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

const flatten = arr => {
  let flatArray = [];
  arr.forEach(el => {
    flatArray = flatArray.concat(el);
  });
  return flatArray;
};

console.log(flatten([1,2,[3,4]]));

assertArraysEqual(flatten([1,2,[3,4,5]]), [1,2,3,4,5]);
assertArraysEqual(flatten([1,[2],[3,4,5]]), [1,2,3,4,5]);
assertArraysEqual(flatten([1,2,[]]), [1,2]);
assertArraysEqual(flatten([1,2,[3]]), [1,2,3]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([[]]), []);
assertArraysEqual(flatten([[1]]), [1]);