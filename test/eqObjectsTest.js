const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('eqObjects', () => {
  it('returns true for equal objects', () => {
    assert.deepEqual(eqObjects({},{}), true);
    assert.deepEqual(eqObjects({a: 1},{a: 1}), true);
    assert.deepEqual(eqObjects({a: 'hi', b: 'hi'},{a: 'hi', b: 'hi'}), true);
  });
  it('returns false for different objects', () => {
    assert.deepEqual(eqObjects({a: 'hi', b: 'hi'},{a: 'hi', b: 'hi there'}), false);
    assert.deepEqual(eqObjects({b: 'hi'},{a: 'hi', b: 'hi'}), false);
    assert.deepEqual(eqObjects({a: 1, b: 'hi'},{a: '1', b: 'hi'}), false);
  });
});