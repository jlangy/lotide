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
  for(let i = 0; i < arr.length; i ++){
    if(!Array.isArray(arr[i]))
      flatArray.push(arr[i]);
    else {
      flatArray = flatArray.concat(flatten(arr[i]));
    }
  };
  return flatArray;
}
console.log(flatten([1,[2,3,[[[[[[4]]]],5,6,7,[8,9]]]]]));


module.exports = flatten;
