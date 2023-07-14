/*

A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

*/

/*
-PARAMETERS: we receive "arr" as an array of positive INT.
-RETURN: we must return the "dominator" integer.
How to know what number will be the dominator?:
    --It needs to appear in more than a half of the arr.length
    --If there isn't a "dominator" we should return -1
-EXAMPLE:
      [3,4,3,2,3,1,3,3],3
      [1,2,3,4,5]),-1
      [1,1,1,2,2,2,2]),2
-PSEUDOCODE:
-We initialize an empty object "freq" to store the frequencies of elements.
-We get the length of the array "arr" and store it in the variable "n".
-We iterate through the array using a for...of loop, and for each element "num"
-we update its frequency in the "freq" object using freq[num] = (freq[num] || 0) + 1. 
-This line checks if the frequency exists and increments it by 1, or initializes it to 1 if it doesn't exist.
-After calculating the frequencies, we iterate through the freq object using a for...in loop.
-For each element num, we check if its frequency (freq[num]) is greater than n / 2. If it is, we return num as the dominator.
-If no element is found with a frequency greater than n / 2, we return -1 to indicate that there is no dominator in the array.
*/

function dominator(arr) {
    const freq = {};
    const n = arr.length;
  
    // Calculate frequencies
    for (let num of arr) {
      freq[num] = (freq[num] || 0) + 1;
    }
  
    // Check for dominator
    for (let num in freq) {
      if (freq[num] > n / 2) {
        return Number(num);
      }
    }
  
    return -1;
  }
  
  
  