const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, [3,4,[5,6,7,[8,9]]]], [1, 2, [3,4,[5,6,7,[8,9]]]]), true);
assertEqual(eqArrays([1, 2, [3,4,[5,6,7,[8,10]]]], [1, 2, [3,4,[5,6,7,[8,9]]]]), false);
assertEqual(eqArrays([1, 2, [3]], [1, 2, [3]]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([''], []), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([[]], []), false);
