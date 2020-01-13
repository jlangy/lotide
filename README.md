# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jonlanglois/lotide`

**Require it:**

`const _ = require('@jonlanglois/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(array, array)`: Takes two arrays as arguments. Returns true if they are equivalent, and false otherwise.
* `eqObjects(array, array)`: Takes two objects as arguments. Returns true if they are equivalent, and false otherwise.
* `countLetters(sentence)`: Takes a string as argument. Returns an object showing the number of times each letter in `sentence` occurs in `sentence`.
* `countOnly(items, itemsToCount)`: Takes two arrays as arguments. Returns an object listing the number of times each element of `itemsToCount` is in `items`.
* `findKey(Object, callback)`: Takes an object and function as arguments. Returns the first key in `object` for which `callback(value)` will pass for that key's value.
* `findKeyByValue(object, value)`: Takes an object for the first argument, and any second argument. Returns the first key in `object` which contains that value.
If `value` is not in `object`, returns undefined.
* `flatten(array)`: Takes an array as argument. Returns a flattened array.
* `head(array)`: Takes an array as argument. Returns the first element of that array.
* `letterPositions(string)` Takes a string as argument. Returns an object containing the letters in `string` as keys, and an array of the positions of that letter in `string` as values.
* `map(array, callback)`: Takes an array and function as arguments. Returns a new array, where the element at index `i` is the result of calling `callback` on `array[i]`.
* `middle(array)`: Takes an array as argument. Returns a new array of the middle element(s) of `array`.
* `tail(array)`: Takes an array as argument. Returns an array of all elements of `array` excluding the first.
* `takeUntil(array, callback)`: Takes an array and function as arguments. Returns an array of the first n elements of `array` that return a falsy value when used as arguments in `callback`.
* `without(items, toExclude)`: Takes two arrays as arguments. Returns an array of all elements of `items` which are not elements of `toExclude`.

