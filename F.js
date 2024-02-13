//Return median of two sorted arrays of the same size by anoymous function


let getMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const midIndex = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 === 0
      ? (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2
      : sortedArray[midIndex];
  }; getMedian([1, 2, 3], [4, 5, 6,]);
//output
3.5
//Return median of two sorted arrays of the same size by IIFE
  let medianValue = (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const midIndex = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 === 0
      ? (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2
      : sortedArray[midIndex];
  })([1, 2, 3], [4, 5, 6]);
  console.log(medianValue);

//output
  3.5