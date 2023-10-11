/**An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
More examples in the test cases.

Good luck! */

function solve(arr) {
    const dominantElements = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isDominant = true;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] <= arr[j]) {
          isDominant = false;
          break;
        }
      }
  
      if (isDominant) {
        dominantElements.push(arr[i]);
      }
    }
  
    return dominantElements;
  }
  
  /*
  params: we receive "arr" as an array filled with numbers integers.
  return: we must return another array filled numbers integers that represent dominant elements.
  -"dominant elements" are those whose value is greater that the element on its right.
  example:
  solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
  solve([5,4,3,2,1]) = [5,4,3,2,1]
  pseudocode
  -we first create an empty arr "dominantElements" to store final values.
  -We iterate over "arr".
  -We create a variable inside the iteration block to track if "isDominant". Initialize with a true boolean value.
  -We make a second iteration to check if the element arr[j] is greater than arr[i]. If true, we set isDominant to false and break.
  -We check the value of isDominant, if its true, we push arr[i] to dominantElements
  
  */