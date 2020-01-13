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

const eqObjects = (obj1, obj2) => {
  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length)
    return false;
  for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    if(!(key in obj2)){
      return false;
    } if (obj1[key] instanceof Array || obj2 instanceof Array) {
      return eqArrays(obj1[key], obj2[key]);
    } if(obj1[key] !== obj2[key])
      return false;
  };
  return true;
}

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) 
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else 
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}
