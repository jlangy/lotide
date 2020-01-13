const flatten = require('../flatten');
const assert = require('chai').assert;

describe('findKeyTest', () => {
  it('returns [1,2,3,4,5] given [1,2,[3,4,5]]', () => {
    assert.deepEqual(flatten([1,2,[3,4,5]]), [1,2,3,4,5])
  });
  it('returns [1,2,3,4,5] given [1,[2],[3,4,5]]', () => {
    assert.deepEqual(flatten([1,2,[3,4,5]]), [1,2,3,4,5])
  });
  it('returns [] given []', () => {
    assert.deepEqual(flatten([]), [])
  });
  it('returns [1] given [[[[[[[[[[[[1]]]]]]]]]]]]', () => {
    assert.deepEqual(flatten([[[[[[[[[[[[1]]]]]]]]]]]]), [1])
  });
});
