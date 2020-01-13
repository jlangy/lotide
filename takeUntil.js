const takeUntil = function(array, callback){
  const returnArray = [];
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])){
      return returnArray;
    } else {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}

module.exports = takeUntil;
