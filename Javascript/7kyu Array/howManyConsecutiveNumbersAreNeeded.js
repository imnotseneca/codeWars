/*
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/

//PREP:
//PARAMETERS: we receive "arr" as an array that can be empty or contains various number INT as elements.
//RETURN: we must return a Number INT that represent how many numbers we need to make the elements on "arr" consecutives.
//EXAMPLE: [4,8,6] => 2 /// [1,2,3,4] => 0
/*
PSEUDOCODE:
-Create a hash table to keep track of which numbers are in the array. 
-Then iterate through the array to find the lowest and highest numbers. 
-Finally, iterate from the lowest to the highest number and check if each number is in the hash table. 
-If not, add it to a count of missing numbers. 
-The count will be the minimum number of integers needed to make the array consecutive.
*/

const consecutive = (arr) => {  // Declare a function named "consecutive" that takes an array argument
    let hash = {}  // Create an empty object to serve as the hash table
    let min = arr[0]  // Initialize a variable "min" to the first element of the array
    let max = arr[0]  // Initialize a variable "max" to the first element of the array
  
    for (let i = 0; i < arr.length; i++) {  // Iterate through the array
      hash[arr[i]] = true  // Set the value of each array element as a key in the hash table
      if (arr[i] < min) {  // Update "min" if the current element is smaller
        min = arr[i]
      }
      if (arr[i] > max) {  // Update "max" if the current element is larger
        max = arr[i]
      }
    }
  
    let count = 0  // Initialize a counter variable "count" to 0
    for (let i = min; i <= max; i++) {  // Iterate from "min" to "max"
      if (!hash[i]) {  // Check whether the current number is in the hash table
        count++  // Increment "count" if the number is missing
      }
    }
  
    return count  // Return the count of missing numbers
  }
  
  