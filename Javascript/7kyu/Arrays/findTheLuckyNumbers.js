/**Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

For example,

ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Don't worry about bad input, you will always receive a finite list of integers. */

const filterLucky = numbers => numbers.filter(number => number.toString().includes('7'));

/*
The filterLucky function takes an array of numbers as its parameter.
The filter method is used to create a new array containing only the elements that satisfy the provided testing function.
The testing function is defined using an arrow function (number => ...). 
Inside this function, each number is converted to a string using toString(), and then includes('7') is used to check if the digit 7 is present in the string representation of the number.
The resulting array contains only those numbers that include the digit 7.
*/