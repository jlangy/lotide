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


