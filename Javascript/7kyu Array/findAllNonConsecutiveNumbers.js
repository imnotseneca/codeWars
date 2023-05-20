/*

A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

Create a function named allNonConsecutive

E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

E.g., for the above array the result should be:

[
  {i: 4, n:6},
  {i: 7, n:15}
]
If the whole array is consecutive or has one element then return an empty array.

The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive and the gap could be larger than one.

*/


//PREP:
//PARAMETERS: we receive "arr" as an array of INT
//RETURN: we must return object/s wrapped into an array. The object must have two properties -> "i" as the index of the non-consecutive number founded; and "n" as the non-consecutive number itself.
//EXAMPLE:
/*
For arr = [1,2,3,4,6,7,8,15,16]
we return:

[
  {i: 4, n:6},
  {i: 7, n:15}
]

-Cause we see 6 and 15 are numbers thats aren't exactly one larger than the previous element.

*/
//PSEUDOCODE:
/*
-We create a new empty array for the "result".
-We iterate trough "arr" and check if the element being iterated is not equal to the previous element + 1.
-Then we push it into result.
*/
function allNonConsecutive (arr) {
    if (arr.length === 0) {
      return [];
    }
    let result = [];
    for(let i = 1; i < arr.length; i++) {
      let previousElement = arr[i-1]
      if(arr[i] !== (previousElement + 1)) {
        result.push({
          i:i, n:arr[i]
        })
        }
    }
    return result;
  }