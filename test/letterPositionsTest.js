const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('letterPositions', () => {
  it('returns {} given an empty string', () => {
    assert.deepEqual(letterPositions(''), {});
  });
  it('returns correct letter counts', () => {
    assert.deepEqual(letterPositions('hi'), {h:[0], i:[1]});
  });
  it('returns correct letter counts', () => {
    assert.deepEqual(letterPositions('hihi'), {h:[0,2], i:[1,3]});
  });
});