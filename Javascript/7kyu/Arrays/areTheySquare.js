/**Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

Examples:

isSquare([1, 4, 9, 16]) --> true

isSquare([3, 4, 7, 9]) --> false

isSquare([]) --> undefined
is_square([1, 4, 9, 16]) --> True

is_square([3, 4, 7, 9]) --> False

is_square([]) --> None */

function isSquare (arr) {
    let tracker = 0;
    if(arr.length === 0) {
      return undefined;
    }
    for(let i = 0; i < arr.length; i++) {
    if(Math.sqrt(arr[i]) % 1 === 0) {
      ++tracker;
      }
    }
      return arr.length === tracker;
  }
  
  //params: we receive "arr" as an array of number INT
  //return: we must return true if all numbers in "arr" are square.
  //example: 
  /*
  
  isSquare([1, 4, 9, 16]) --> true
  
  isSquare([3, 4, 7, 9]) --> false
  
  isSquare([]) --> undefined
  
  */
  //pseudocode:
  //we define a tracker counter.
  //we make a conditional for empty arr
  //we loop through arr
  //we check if the square root of arr[i] % 1 it's equal to 0. if true ++tracker
  //we return true if arr.length its equal to tracker.
  