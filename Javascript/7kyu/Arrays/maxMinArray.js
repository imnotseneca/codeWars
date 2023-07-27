/**In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck! */


function solve(arr) {
  const finalArr = [];
  const sortedArr = arr.sort((a, b) => a - b);

  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    finalArr.push(sortedArr[right]);
    finalArr.push(sortedArr[left]);
    left++;
    right--;
  }

  // If the array has an odd number of elements, there will be one element left in the middle
  if (left === right) {
    finalArr.push(sortedArr[left]);
  }

  return finalArr;
}




//prep:
//params: we receive "arr" as an array of numb INT
//return: we must return a new arr that contains the same elements from "arr" but sorted in this specific way:
/*
[FirstMax,FirstMin,SecondMax,SecondMin...]
*/
//example:
/*
[15,11,10,7,12] => [15,7,12,10,11]
[91,75,86,14,82] => [91,14,86,75,82]
[75,82,86]
*/
//pseudocode:
/*
--We create a new variable to store final array.
--We sort arr from lower to greater.
--We iterate over arrSorted while i < arrSorted.length
--Create two variables "Max" and "Min"
--Max will store value that comes from arrSorted.pop()
--Min will store value that comes from arrSorted.unshift()
--We push the values to Resullt and then return it.



*/