//PREP:
//PARAMETERS: we have an "array" that holds integers, either positive or negative.
//RETURN: we must return the sum of all positive integers elements that hold "arr"
//EXAMPLE: [1,-4,7,12] => 1 + 7 + 12 = 20
//PSEUDO-CODE: 
/*
-we iterate through the array length and check if elements are greater than 0, if so, we sum them and drop the final result.
*/
// function positiveSum(arr) {
//   let result = 0;  
//   for(let i = 0; i<arr.length; i++) {
//     if(arr[i]>0) {
//       result += arr[i]
//     }
//   }
//   return result;
// }

const positiveSum = arr => arr.reduce((a,b) => a + (b > 0 ? b : 0),0)