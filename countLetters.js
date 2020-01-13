const countLetters = sentence => {
  const letterCount = {}
  sentenceLetters = sentence.replace(/[^a-zA-Z]/g, "").toLowerCase();
  for (letter of sentenceLetters){
    if(letter in letterCount){
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}

module.exports = countLetters;