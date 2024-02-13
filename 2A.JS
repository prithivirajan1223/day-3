//Print odd numbers in an arraY BY arrow function
let printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5,6,7,8,9]);

  // OUTPUT
  1
  3
  5
  7 
  9
//Convert all the strings to title caps in a string array:

let convertToTitleCaps = (arr) => {
    return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

let titleCapsArray = convertToTitleCaps(["apple", "banana"."orange ","gova"]);
console.log(titleCapsArray);
//output
['Apple', 'Banana','Orange', 'Gova']



//Sum of all numbers in an array:

let sumArray = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

let totalSum = sumArray([1, 2, 3, 4, 5,6,7,8,9,10]);
console.log(totalSum);
// output
55


// return all the prime numbers in an array;
let getPrimeNumbers = (arr) => {
    return arr.filter((num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
     }
 }
      return num > 1;
    });
  };
  
  let primeNumbers = getPrimeNumbers([2, 3, 5, 7, 11, 13,14 ,15, 19,20]);
  console.log(primeNumbers);
//out put
[2, 3, 5, 7, 11, 13, 15 19 ]
//return all the palindromes in an array;
  let getPalindromes = (arr) => {
    return arr.filter((str) => {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    });
  };
  
  let palindromesArray = getPalindromes(["level", "radar", "hello", "madam"]);
  console.log(palindromesArray);