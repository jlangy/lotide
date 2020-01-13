const findKey = require('../findKey');
const assert = require('chai').assert;

describe('findKey', () => {
  it('returns "a" given ({a: true}, (el) => el', () => {
    assert.strictEqual(findKey({a: true}, (el) => el), "a");
  });
  it('returns "c" given ({a: 1, b: 2, c: 3}, (el) => el == 3', () => {
    assert.strictEqual(findKey({a: 1, b: 2, c: 3}, (el) => el == 3), "c");
  });
  it('returns undefined given ({a: 1, b: 2, c: 3}, (el) => el == 4', () => {
    assert.strictEqual(findKey({a: 1, b: 2, c: 3}, (el) => el == 4), undefined);
  });
});