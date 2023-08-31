/**Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8] */

const doubleEveryOther = (a) => a.map((element, index) => index % 2 !== 0 ? element * 2 : element)


//prep
//params: we receive "a" as an array of numbers int
//return: we must return an array with all the second elements multiplicated by 2.
//example:
/*
[1,2,3,4] ->[1,4,3,8]
*/
/*
pseudocode:
-map over a passing element and index, check if index % 1 === 0, if so multiply element by 2.
*/