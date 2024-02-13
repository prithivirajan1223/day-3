//Return all the palindromes in an array:




let getPalindromes = function(arr) {
    return arr.filter(function(str) {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    });
  }; getPalindromes(["level","radar","hello","madam"]);



  let palindromesArray = (function(arr) {
    return arr.filter(function(str) {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    });
  })(["level", "radar", "hello", "madam"]);
  console.log(palindromesArray);