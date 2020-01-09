const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
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

const eqObjects = (obj1, obj2) => {
  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length)
    return false;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!(key in obj2)) {
      return false;
    } if (obj1[key] instanceof Array || obj2 instanceof Array) {
      return eqArrays(obj1[key], obj2[key]);
    } if (typeof obj1[key] === "object" || typeof obj2[key] === "object") {
      return eqObjects(obj1[key], obj2[key]);
    }
    if (obj1[key] !== obj2[key])
      return false;
  }
  return true;
};


//Test Objects
const ab = {a: '1', b: {a:'2', b:{c: '3'}}};
const ba = {b: {a:'2', b:{c:'3'}}, a: '1'};
const bafalse = {b: {a:'2', b:{d:'3'}}, a: '1'};
const abc = {a: '1', b: '2', c: '3'};
const abcfalse = {a: '1', b:'3', c:'3'};

const deep = {a:{b: {c: {d: {e: 'deep', f: {g: 'deeper'}}}}}};
const deep2 = {a:{b: {c: {d: {f: {g: 'deeper'}, e: 'deep'}}}}};

const cd = {c: '1', d:["2", 3]};
const cd2 = {c:'1', d: ['2',3,4]};

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab,bafalse), false);
assertEqual(eqObjects(abc,ba), false);
assertEqual(eqObjects(deep, deep2), true);

assertEqual(eqObjects(cd,cd2), false);
assertEqual(eqObjects(abc,abcfalse), false);

