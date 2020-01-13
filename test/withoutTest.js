const assert = require('chai').assert;
const without = require('../without');

describe('without', () => {
  it('returns [] given []', () => {
    assert.deepEqual(without([]), [])
  });
  it('removes elements correctly', () => {
    assert.deepEqual(without([1,2,3,2,3,2,1],[1,2]), [3,3])
    assert.deepEqual(without([1,2,3,2,3,2,1],[1,2,3]), [])
    assert.deepEqual(without(['hi', 'there'],['there']), ['hi'])
  });
});