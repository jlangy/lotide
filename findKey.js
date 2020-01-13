const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(obj, callback){
  const keys = Object.keys(obj);
  for(let i = 0; i < keys.length; i++){
    if(callback(obj[keys[i]])){
      return keys[i];
    }
  }
  return undefined;
}

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const data2 = {a:1, b:2, c:3}

const data3 = {}

const data4 = {
  a: [1,2,3],
  b: [], 
  c: [1,2,3,4,5,6]
}

assertEqual(findKey(data1,x => x.stars === 2), 'noma');
assertEqual(findKey(data2,x => x === 2), 'b');
assertEqual(findKey(data3,x => 5), undefined);
assertEqual(findKey(data4,x => x.length > 3), 'c');

module.exports = findKey;
