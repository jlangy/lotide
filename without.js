const without = (arr, toExclude) => arr.filter(el => !toExclude.includes(el));

module.exports = without;
