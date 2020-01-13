const middle = (arr) => {
  if (arr.length < 3)
    return [];
  if (arr.length % 2 === 0) {
    const firstMiddleIndex = arr.length / 2 - 1;
    return arr.slice(firstMiddleIndex, firstMiddleIndex + 2);
  } else {
    const middleIndex = (arr.length - 1) / 2;
    return arr.slice(middleIndex, middleIndex + 1);
  }
};

module.exports = middle;