/**
 * Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
 */


//params: we receive "nums" as an array of numbers INT.
//return: we must return a new array that contains numbers INT
//Those numbers must represent the amount of times the element iterated from "nums" is greater than the numbers
//at it's right side.
//EXAMPLE: 
/*
-Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
-5 is greater than 4 3 2 1 so -> 4
-4 is greater than 3 2 1 so -> 3
-and so on...

*/

function smaller(nums) {
    //initialize the result array with zeros
  const result = new Array(nums.length).fill(0);
   // iterate through each element in the input array from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
      // Initialize a counter variable to 0 for each element
      let count = 0; 
  // iterate through the elements to the right of the current element
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          // if an element is smaller than the current element, increment the counter
          count++;
        }
      }
  // Store the count in the corresponding index of the result array
      result[i] = count;
    }
  // return the result array
    return result;
  }
  