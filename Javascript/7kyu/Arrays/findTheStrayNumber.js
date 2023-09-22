/**
 * 
 * You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
 */


function stray(numbers) {
    // Create an object to store counts of each number
    const count = {}; 
  
    // Count occurrences of each number in the array
    for (const num of numbers) {
      count[num] = (count[num] || 0) + 1;
    }
  
    // Find the number that occurs only once
    for (const num in count) {
      if (count[num] === 1) {
        // Convert it back to an integer
        return parseInt(num); 
      }
    }
  }
  
  
  /*
  params: we receive "numbers" as an array of numbers integers.
  -this array will always have an odd-length.
  -this array will always have two numbers, one its repited and the other don't
  return: we must return the number that doesn't repeat.
  example:
  stray([1, 1, 2]), 2);
  stray([1, 2, 1]), 2);
  stray([2, 1, 1]), 2);
  pseudocode:
  -We create an empty object called count. 
  -This object will be used to store the counts of each unique number in the array.
  -We iterate through the numbers array using a for...of loop.
  -For each number (num) in the array, we update the count object to keep track of how many times that number has appeared.
  -The line count[num] = (count[num] || 0) + 1; does the following:
  --It checks if num is already a property in the count object. If it's not, it initializes it to 0.
  --Then, it increments the count by 1 for that num.
  -After this loop, the count object will contain counts of all the unique numbers in the numbers array.
  -We iterate through the properties (which are the unique numbers) of the count object using a for...in loop.
  -For each unique number (num), we check if its count is equal to 1. If it is, that means it's the unique number in the array.
  -We return parseInt(num) to convert the num back to an integer (since object keys are treated as strings in JavaScript).
  */