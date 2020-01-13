const tail = require('../tail');

const assert = require('chai').assert;

describe('#tail', () => {
  it('returns [5,6] given [4,5,6]', () => {
    assert.deepEqual(tail([4,5,6]), [5,6]);
  });
  it('returns [] given []', () => {
    assert.deepEqual(tail([]), []);
  });
});

// assertEqualArrays(tail([]), []);
// assertEqualArrays(tail([1,4,3,4]), [4,3,4]);
// assertEqualArrays(tail([1,2,3,4,'hi',6]), [2,3,4,'hi',6]);

