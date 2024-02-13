// print odd numbers in an array by using anonymous function


const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 
//output
1
3
5
7
9

//print odd numbers in an array by using IIFE 

// input 
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//output
1
3
5
7
9
