/**In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88] */

function getLargerNumbers(a, b) {
    let finalArr = []
    for(let i = 0; i < a.length;i++ ){
      if(a[i]>b[i]) {
        finalArr.push(a[i])
      } else {
        finalArr.push(b[i])
      }
    }
    return finalArr
  }
  
  /*
  params: 
  -we receive two params:
  --"a" is an array of numbers integers.
  --"b" is an array of numbers integers.
  return: we must return a final array that merge both "a" and "b" after comparing value of each elements on the same position
  example:
  let arr1 = [13, 64, 15, 17, 88];
  let arr2 = [23, 14, 53, 17, 80];
  getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
  
  pseudocode:
  -we create a variable called finalArr to store the final values.
  -we iterate over "a" and check if the element iterated at [i] position is greater or lower. If its greater, push it to finalArr
  -return finalArr
   */