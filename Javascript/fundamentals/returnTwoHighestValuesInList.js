/**In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  [] */


function twoHighest(arr) {
    const sortedArr = [...new Set(arr)].sort((a, b) => b - a);
  
    return arr.length < 2 ? arr : sortedArr.slice(0, 2);
  }
  
  /*
  params: we receive "arr" as an array of number int.
  return: we must return an array with the two highest values in "arr". If arr.length < 2 we return only the highest number.
  example:
  [4, 10, 10, 9]  =>  [10, 9]
  [1, 1, 1]  =>  [1]
  []  =>  []
  pseudocode:
  -create a new variable "sortedArr" where we create a new Set of arr and sort it.
  -we make a return with a ternary operator where we evaluate arr.length < 2. If true returns arr, else return a slice of
  -sortedArr from 0 to 2.
  
  */