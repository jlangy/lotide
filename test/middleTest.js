const middle = require('../middle');
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
