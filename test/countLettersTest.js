const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("countLetters", () => {
  it('returns {h: 1} given "h"', () => {
    assert.deepEqual(countLetters('H'), {h: 1});
  });
  it('returns {h: 2, a:1} given "hah"', () => {
    assert.deepEqual(countLetters('hah'), {h: 2, a:1});
  });
  it('returns {h: 2, a: 1} given "h,%a     h"', () => {
    assert.deepEqual(countLetters('h,%a    h'), {h: 2, a:1});
  });
});