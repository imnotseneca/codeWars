/**
 * vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.
 */

function vowelOne(s) {
  const arr = s.split("");
  let binaryReturn = [];
  const dictionary = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  for (let i = 0; i < arr.length; i++) {
    if (dictionary.hasOwnProperty(arr[i].toLowerCase(""))) {
      binaryReturn.push("1");
    } else {
      binaryReturn.push("0");
    }
  }
  return binaryReturn.join("");
}

//params:
//we receive "s" as a string of characters.
//return: we must return a string of numbers "1" and "0" based on "s", "1" will be replacing vowels. "0" other chars.
/*example:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
*/
//pseudocode:
/*
-split "s" into a new array called "arr" taking into mind spaces
-create a variable called binaryReturn as ''
-create a dictionary for vowels.
-iterate over "arr"
-check if element match dictionary, if true, push '1' to binaryReturn
-Else push '0'.
-Return binaryReturn as a string.
*/
