const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns 2 given [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it('returns [2,3] given [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it('returns [] given []', () => {
    assert.deepEqual(middle([]), []);
  });
});

// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([1,2,3,4]), [2,3]);
// assertArraysEqual(middle([1,2]), []);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([2,3,2,4,5]), [2]);