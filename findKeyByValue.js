const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (object, value) => {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (object[keys[i]] === value)
      return keys[i];
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  news: "The Expanse"
};

const alphaNum = {
  a:1,
  b:1,
  c:4,
  e:2,
  g:4
};

const empty = {};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(alphaNum, 4), "c");
assertEqual(findKeyByValue(empty, "That '70s Show"), undefined);