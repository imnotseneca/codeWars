/**Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck! */

function solve(arr) {
  let lastOccurrence = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentElement = arr[i];

    if (lastOccurrence.hasOwnProperty(currentElement)) {
      arr.splice(i, 1);
    } else {
      lastOccurrence[currentElement] = i;
    }
  }
  return arr;
}

/*
  #params: we receive "arr" as an array of number integers
  #return: we must return an array filtering the duplicates, keeping the last occurrence of each element.
  #example:
  For input: [3, 4, 4, 3, 6, 3]
  
  remove the 3 at index 0
  remove the 4 at index 1
  remove the 3 at index 3
  
  Expected output: [4, 6, 3]
  
  #pseudocode: 
  -we declare a new dictionary called "lastOccurrence" to store the rightmost occurrence.
  -iterate over arr, starting from right to left.
  -On iteration block we declare variable "currentElement" to store the element iterated on each.
  -Check if lastOcurrence has currentElemnt duplicated.
  -If true we splice arr from i to 1 to remove the duplicate.
  -Else we update the last occurrence for the element.
  -We return the arr.
  */
