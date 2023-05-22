/*

Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

*/

//PREP:
//PARAMETERS: we receive "arr" as an array of strings.
//RETURN: we must return an array into an array that holds the multiples ways of dividing "arr".
//EXAMPLE:
/*
["I", "wish", "I", "hadn't", "come"] ->
[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
*/
//PSEUDOCODE:
/*
-The "partlist" function is defined with "arr" as the input parameter.
-An empty array "result" is created to store the resulting array of arrays.
-The for loop is used to iterate over the indices of the "arr" array from 0 to arr.length - 1.
-Inside the loop, two arrays, "firstPart" and "secondPart", are created.
-"firstPart" contains the elements from -index 0 to i- (inclusive) using the slice method.
-"secondPart" contains the elements from index i + 1 to the end of the array using the slice method.
-The join method is used on firstPart and secondPart with a space ' ' as the separator to concatenate the elements into strings.
-An array [firstPart.join(' '), secondPart.join(' ')] is pushed to the result array, representing a division of the original array.
-After the loop completes, the result array is returned.
*/

function partlist(arr) {
    let result = [];
    for(let i = 0; i<arr.length - 1; i++) {
      let firstPart = arr.slice(0, i + 1)
      let secondPart = arr.slice(i + 1)
      result.push([ firstPart.join(' '),  secondPart.join(' ')])
    }
    return result
  }
  
  
  
  