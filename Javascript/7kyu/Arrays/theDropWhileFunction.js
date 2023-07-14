/*

Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

dropWhile(seq, isEven) // -> [1,2,5,4,3,2]


*/

//PREP:
//PARAMETERS: we receive "arr" as an array that holds a sequence of number. And "pred" that is function that holds an algorithm to check for example if a number is odd or even. We can pass elements of "arr" into "pred".
//RETURN: we must return an array cropped at the first element that "pred" finds "false" to its algorithm. Then it will hold the "false" element and all the other elements placed forward.
//EXAMPLE: 

/*
[2,6,4,10,1,5,4,3] -> [1,5,4,3]
[2,100,1000,10000,5,3,4,6] -> [5,3,4,6]
[2,4,10,100,64,78,92] -> []

//PSEUDOCODE:

-Identify input parameters
-Understand the logic behind "dropWhile" and it relationship with "pred()" 
-Taking in mind how to iterate through "arr" to find the largest prefix that brings "false" value from "pred()"
-Think about how eliminate the element before the prefix.
*/


function dropWhile(arr, pred) {
    for (let i = 0; i < arr.length; i++) {
      if (!pred(arr[i])) {
        return arr.slice(i);
      }
    }
    return [];
  }