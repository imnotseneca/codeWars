/**Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3) */


const intDiff = (arr, n) => {
    let numOftimes = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(arr[i] - arr[j]) === n) {
          numOftimes += 1;
        }
      }
    }
    return numOftimes;
  };
  
  
  /*
  params:
  
  -we receive "arr" as an array of number integers
  -we receive "n" as a number interger.
  
  return: 
  
  we must return a number integer that represent the number of times two integers in "arr" have a difference of "n"
  
  
  example:
  [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
  [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
  
  pseudocode:
  
  -Initialize a variable numOftimes to 0. This will keep track of the number of pairs with the specified difference.
  -Iterate over each element in the array using a loop with the variable i.
  -For each element at index i, iterate over the elements that come after it in the array using a nested loop with j starting from i + 1.
  -Check if the absolute difference between the elements at indices i and j is equal to the specified difference (n).
  -If the condition is true, increment the numOftimes variable by 1.
  -After completing the loops and counting the pairs, return the final value of numOftimes.
  */