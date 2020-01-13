const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('countOnly', () => {
  it('returns {Jason: 1} given (["Jason"], {Jason: true})', () => {
    assert.deepEqual(countOnly(["Jason"], {Jason: true}), {Jason: 1})
  });
  it('returns {} given (["Jason"], {Jason: false})', () => {
    assert.deepEqual(countOnly(["Jason"], {Jason: false}), {})
  });
  it('returns {} given (["Jason"], {Bob: false, Cat: true})', () => {
    assert.deepEqual(countOnly(["Jason"], {Bob: false, Cat: true}), {})
  });
  it('returns {Jason: 2, cat: 1} given (["Jason", "Cat", "Jason"], {Bob: false, Cat: true, Jason: true})', () => {
    assert.deepEqual(countOnly(["Jason", "Cat", "Jason"], {Bob: false, Cat: true, Jason: true}), {Cat: 1, Jason: 2})
  });

});