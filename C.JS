
//SUM Of all numbers in an array using the anonymous function


const sumOfNumbers = function(arr) {
    const sum = arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    console.log(sum);
};

sumOfNumbers([1, 2, 3, 4, 5]);
//OUTPUT
15


// Sum of all numbers in an array usin the IIFE
 
(function(arr) {
    var sum = arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// OUTPUT
15