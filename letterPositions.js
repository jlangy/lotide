const letterPositions = sentence => {
  const results = {};
  lowerCaseSentence = sentence.toLowerCase();
  const letters = lowerCaseSentence.split('');
  letters.forEach((letter,i) => {
    if(letter in results){
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  });
  return results;
}

module.exports = letterPositions;
