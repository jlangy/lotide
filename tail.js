const assertArraysEqual = require('./assertArraysEqual');

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
