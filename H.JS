// Rotate an array by k time by anonymous function
let rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  };
  rotateArray([1,2,3,4,5],2);
  
  //OUTPUT
  [4,5,1,2,3]

  
//Rotate an array by K TIMES by IIFE functions
  let rotatedArray = (function(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  })([1, 2, 3, 4, 5], 3);
  console.log(rotatedArray);

//OUTPUT
[3,4,5,1,2]