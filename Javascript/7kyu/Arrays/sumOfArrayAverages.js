/**Program a function sumAverage(arr) where arr is an array containing arrays full of numbers, for example:

sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);
First, determine the average of each array. Then, return the sum of all the averages.

All numbers will be less than 100 and greater than -100.
arr will contain a maximum of 50 arrays.
After calculating all the averages, add them all together, then round down, as shown in the example below:
The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.

Calculate the average of each individual array:
[3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
[21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2
Add the average of each array together:
3 + 41.2 = 44.2
Round the final average down:
Math.floor(44.2) = 44
import math
math.floor(44.2) = 44 */

const sumAverage = (arr) => {
  let sum = 0;

  arr.forEach((e) => {
    // Calculate the sum of each array
    const arraySum = e.reduce((acc, curr) => acc + curr, 0);

    // Calculate the average of each array
    const arrayAvg = arraySum / e.length;

    // Accumulate the average to the overall sum
    sum += arrayAvg;
  });

  // Round down the final sum
  return Math.floor(sum);
};

/*
  params: we receive "arr" as an array of arrays containing number integers.
  return: first we must determine the average of each array and then return the sum of all the averages.
  examples:
  [3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
  [21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2
  pseudocode:
  -First we find the average of each array, summing all their elements and dividing them by the length of the array.
  -We then sum all the averages anth math.floor the return of the result.
  
  */
