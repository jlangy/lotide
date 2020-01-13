const assert = require('chai').assert;
const map = require('../map');

describe('map', () => {
  it('returns [] given []', () => {
    assert.deepEqual(map([]), []);
  });
  it('maps correctly', () => {
    assert.deepEqual(map([1,2,3], el => el * 2), [2,4,6]);
    assert.deepEqual(map([1,2,3], el => el + 'hi'), ['1hi','2hi','3hi']);
  });
});