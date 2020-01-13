const assertEqualArrays = require('../assertArraysEqual');
const tail = require('../tail');

assertEqualArrays(tail([]), []);
assertEqualArrays(tail([1,4,3,4]), [4,3,4]);
assertEqualArrays(tail([1,2,3,4,'hi',6]), [2,3,4,'hi',6]);

