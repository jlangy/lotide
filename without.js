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

const without = (arr, toExclude) => arr.filter(el => !toExclude.includes(el));

assertArraysEqual(without([1,2,1,3,4], [1]), [2,3,4]);
assertArraysEqual(without(['HELLO', 'WORLD', 'LIGHTHOUSE'], ['LIGHTHOUSE']), ['HELLO', 'WORLD']);
assertArraysEqual(without(['HELLO', 'WORLD', 'LIGHTHoUSE'], ['LIGHTHOUSE']), ['HELLO', 'WORLD', 'LIGHTHoUSE']);
assertArraysEqual(without([1,2,'1',3,4], [1]), [2, '1', 3,4]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([1,2], []), [1,2]);