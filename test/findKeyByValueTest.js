const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const alphaNum = {
  a:1,
  b:1,
  c:4,
  e:2,
  g:4
};

describe('findKeyByValue', () => {
  it('returns undefined when value not present', () => {
    assert.strictEqual(findKeyByValue(alphaNum, 5), undefined);
  });
  it('returns the correct value count', () => {
    assert.strictEqual(findKeyByValue(alphaNum, 1), 'a');
    assert.strictEqual(findKeyByValue(alphaNum, 2), 'e');
    assert.strictEqual(findKeyByValue(alphaNum, 4), 'c');
  });
});
