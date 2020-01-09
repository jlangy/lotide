const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return false;
  for(let i = 0; i < arr2.length; i++){
    if(Array.isArray(arr1[i]) || Array.isArray(arr2[i])){
      return eqArrays(arr1[i], arr2[i]);
    }
    if (arr1[i] !== arr2[i])
      return false;
  };
  return true;
}

// assertEqual(eqArrays([1, 2, [3]], [1, 2, [3]]), true);
assertEqual(eqArrays([1, 2, [3,4,[5,6,7,[8,9]]]], [1, 2, [3,4,[5,6,7,[8,9]]]]), true);
assertEqual(eqArrays([1, 2, [3,4,[5,6,7,[8,10]]]], [1, 2, [3,4,[5,6,7,[8,9]]]]), false);
assertEqual(eqArrays([1, 2, [3]], [1, 2, [3]]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([''], []), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([[]], []), false);
