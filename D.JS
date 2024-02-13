// Anonymous function
let getPrimeNumbers = function(arr) {
  return arr.filter(function(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
};
getPrimeNumbers([1,2,3,4,5,6,7,8,9]);




// IIFE
let primeNumbers = (function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  })([2, 3, 5, 7, 11, 13]);
  console.log(primeNumbers);
  