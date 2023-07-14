/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/


//PREP:
//PARAMETERS: we receive "numbers" as an array of numbers INTEGERS that can be positive or negative.
//RETURN: we must find the min-max numbers and return the difference between them.
//EXAMPLE:
// [21, 34, 54, 43, 26, 12]) ->> 42. Max number is 54 and min number is 12. So we return 42.
// [-1, -41, -77, -100]) ->> 99
//PSEUDOCODE:
/*
-We need to find min-max values.
-To do so we gonna sort "numbers" from lower to greater.
-We store min and max on variables
-We return the result.
*/

function betweenExtremes(numbers) {
    let sortArr = numbers.sort((a,b) => a - b)
    if(sortArr[numbers.length - 1] === sortArr[0]) {
      return 0
    } else {
      return Number(sortArr[numbers.length -1] - sortArr[0])
    }
  }