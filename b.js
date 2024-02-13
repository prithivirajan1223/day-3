// Convert all the strings to title caps in a string array using anonymous function
// input
const convertToTitleCaps = function(arr) {
    const titleCaps = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCaps);
};

convertToTitleCaps(["apple ", "orange", "pineapple"]);
 
// output

['Apple', 'Orange', 'Pineapple']

//// Convert all the strings to title caps in a string array using IIFE
// input
(function(arr) {
    var titleCaps = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCaps);
})(["orange", "apple", "pineapple"]);
 
// output
['Orange', 'Apple', 'Pineapple']
