/**
 * Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

 */


//PREP
/*
PARAMETERS: we receive "array" as an array filled with other arrays with number integers.
RETURN: we must return a whole new array with all the elements sorted in ascending order.
EXAMPLE: [[3, 2, 1], [7, 9, 8], [6, 4, 5]] -->> [1, 2, 3, 4, 5, 6, 7, 8, 9]

*/

//Using sort at the end.
// function flattenAndSort(array) {
//   let result = [];
//   for(let i = 0; i < array.length; i++) {
//     for(let j = 0; j < array[i].length; j++) {
//       result.push(array[i][j])
//     }
//   }
//   return result.sort((a , b) => a - b )
// }


//Readable option with multiple for loops including the sorting one
// function flattenAndSort(array) {
//   let result = [];
//   for(let i = 0; i < array.length; i++) {
//     for(let j = 0; j < array[i].length; j++) {
//       result.push(array[i][j])
//     }
//   }
//     for(let i = 0; i < result.length - 1; i++) {
//     for(let j = i + 1; j < result.length; j++) {
//       if(result[i] > result[j]) {
//         [result[i], result[j]] = [result[j], result[i]]
//       }
//     }
//   }
//   return result
// }


//One line solution.

const flattenAndSort = array => [].concat(...array).sort((a,b) => a - b) 