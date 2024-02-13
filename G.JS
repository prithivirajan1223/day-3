//Remove duplicates from an array BY ANONYMOUS
let removeDuplicates = function(arr) {
    return arr.filter(function(item, index, self) {
      return self.indexOf(item) === index;
    });
  }; removeDuplicates([1,2,3,4,5,1,2,3,4,5]);

  //OUTPUT
[1,2,3,4,5]

//Remove duplicates from an array BY IIFE
let uniqueArray = (function(arr) {
    return arr.filter(function(item, index, self) {
      return self.indexOf(item) === index;
    });
  })([1, 2, 2, 3, 4, 4, 5]);
  console.log(uniqueArray);