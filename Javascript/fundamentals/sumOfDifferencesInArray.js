//PREP
//Parameters: an array of integers.
//Return: a value that is a positive integer obtained by summing the differences between consecutive pairs in the array and in descendir order.
//Example: [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0

const sumOfDifferences = arr => arr.sort((a, b) => b - a)
                                   .map((a, i) => a - arr[i + 1] || 0)
                                   .reduce((a, b) => a + b, 0)