const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('takeUntil', () => {
  it('returns [] given []', () => {
    assert.deepEqual(takeUntil([]), [])
  });
  it('returns the correct array', () => {
    assert.deepEqual(takeUntil([1,2,3,4], el => el == 3), [1,2])
    assert.deepEqual(takeUntil([1,2,3,4], el => el == 2), [1])
    assert.deepEqual(takeUntil([1,2,3,4], el => el == 1), [])
  });
});