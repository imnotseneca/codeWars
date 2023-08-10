/**Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.

 */

function unusedDigits(...params) {
  let finalResult = '';
  let newArr = params.join('').split('').sort();
  const zeroToNine = ['0','1','2','3','4','5','6','7','8','9']
  for(let i = 0; i < 10; i++) {
    if(!newArr.includes(zeroToNine[i])) {
      finalResult += i.toString()
    }
  }
  return finalResult
}

//prep:
//params: params as an array of numbers integers
//return: we must return a string of numbers that represent the numbers that aren't presented on "params".
//example:
/*
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
*/
/*
pseudocode:
-declare a new variable called "finalResult" that will hold the numbers in a string.
-declare another variable "newArr" to join the array into a string, and then split it by elements and sort it.
-declare a variable "zeroToNine" that will hold string numbers from 0 to 9.
-then we gonna make a for loop that will iterate till i < 10 cause we need to check for 10 elements. 
-check if "newArr" includes the index element of "zeroToNine" 
-if true we add the index.toString() to finalResult
-return final result.
*/