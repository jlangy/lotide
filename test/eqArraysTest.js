const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays", () => {
  it('returns true for equal arrays', () => {
    assert.deepEqual(eqArrays([1],[1]), true);
    assert.deepEqual(eqArrays([],[]), true);
    assert.deepEqual(eqArrays([1,1,2,[1,2]],[1,1,2,[1,2]]), true);
  });
  it('returns false for unequal arrays', () => {
    assert.deepEqual(eqArrays([],[1]), false);
    assert.deepEqual(eqArrays([1,2,3],[1,2]), false);
    assert.deepEqual(eqArrays([1,1,2,[1]],[1,1,2,[1,2]]), false);
  });
});