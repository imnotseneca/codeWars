// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']


//parameters: we receive two arrays.
/*
-array1: it can be an array filled with numbers, strings or null
-array2: it can be an array filled with numbers, strings or null
-both will have same length.
*/
//return: we must return a new array that contains array1 and array2 combined and alternated.
//example:
/*
[1, 2, 3], ['a', 'b', 'c']), [1, 'a', 2, 'b', 3, 'c']
[1, 1, 1, 1], [2, 2, 2, 2]), [1, 2, 1, 2, 1, 2, 1, 2]

*/

function arrayMash (array1, array2) {
    const combinedArr = [];
    for(let i = 0; i < array1.length;i++) {
      combinedArr.push(array1[i])
      combinedArr.push(array2[i])
    }
    return combinedArr
  }