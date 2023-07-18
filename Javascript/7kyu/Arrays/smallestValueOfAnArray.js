/**
 * 
 * Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
 */

function min(arr, toReturn) {
    const sortedArr = arr.map(e => e).sort((a,b) => a - b)
   
    if(toReturn === 'value') {
      return sortedArr[0]
    } else (toReturn === 'index') 
      return arr.indexOf(sortedArr[0]);
      
   }
     
   //prep: 
   /*
   params:
   arr: first parameter will always be an array filled with at least 1 number and no duplicates.
   toReturn: second parameter will be a string holding one of two values: 'value' and 'index'.
   return: based on toReturn value if "value" we return the smallest value of "arr". else if "index" we return index of smallest value from "arr"
   example:
   min([1,2,3,4,5], 'value') // => 1
   min([1,2,3,4,5], 'index') // => 0
   pseudocode:
   -we create storedArr variable that will hold a new sorted array from "arr". 
   -we check if "toReturn" === 'value' then we return storedArr[0], else "toReturn" === 'index'.
   -we return index of storedArr[0] on "arr". 
   */