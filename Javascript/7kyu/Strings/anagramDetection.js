/**
 * 
 * An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"


 */


/*
-Parameters:
The function isAnagram takes in two parameters:

test: The first string to check for an anagram.
original: The second string to check for an anagram.

-Returns a boolean value:

true: If str1 and str2 are anagrams of each other.
false: If str1 and str2 are not anagrams of each other.

-Example:
console.log(isAnagram("foefet", "toffee")); // Output: true
console.log(isAnagram("Buckethead", "DeathCubeK")); // Output: true
console.log(isAnagram("Hello", "World")); // Output: false

-PseudoCode:

*/

const isAnagram = (test, original) => {
  
    let s1 = test.toLowerCase().split('').sort().join('');
      
    let s2 = original.toLowerCase().split('').sort().join('');
    if(s1 === s2) {
      return true
    } else {
      return false
    }
  };
  
  