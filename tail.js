const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  return array.slice(1);
};

function assertEqualArrays(actual, expected){
  assertEqual(actual.length, expected.length);
  actual.forEach((el,i) => {
    assertEqual(el, expected[i]);
  });
}

assertEqualArrays(tail([]), []);
assertEqualArrays(tail([1,4,3,4]), [4,3,4]);
assertEqualArrays(tail([1,2,3,4,'hi',6]), [2,3,4,'hi',6]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);