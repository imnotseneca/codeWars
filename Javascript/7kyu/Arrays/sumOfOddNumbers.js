/*

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


*/

//PREP:
//PARAMETERS: we receive "n" as an INT.
//RETURN: we must return the result of summing the numbers in the nth row of the triangle shown.
//EXAMPLE:
// 1 -->  1
// 2 --> 3 + 5 = 8
// 42 --> 74088
//PSEUDOCODE:
/*
-The result of summing the elements in the "n" row shown to be the n elevado al cubo.

*/

function rowSumOddNumbers(n) {
    return Math.pow(n,3)
   }