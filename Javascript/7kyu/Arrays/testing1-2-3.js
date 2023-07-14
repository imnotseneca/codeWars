/*PARAMETERS: we receive "array" as an array of letters.
RETURN: we must return a new array that appends index + 1 to the actual element value.
EXAMPLE: 
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

const number = array => array.length > 0 ? array.map((element, index) => `${index + 1}: ${element}`) : []

// function number (array) {
//   let result = [];
//   if(array.length < 0) {
//     return result;
//   }
//   for(let i = 0; i < array.length; i++) {
//   result.push(`${i+1}: ${array[i]}`)
// }
//   return result
//   }