/**Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

For example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H...", because 1 <= 3

Requested maximum length will be greater than 0. Input string will not be empty. */

function trim(str, size) {
    if (str.length <= size) {
      return str;
    }
    if (size <= 3) {
      return str.substring(0, size) + '...';
    }
    return str.substring(0, size - 3) + '...';
  }
  
  //prep
  //params: we receive two types of parameters:
  //first params is "str" which represent a strign of words of certain length.
  //seconde params is "size" which is a num int.
  //return: we must take into mind "size" to trim "str" and return:
  //the entire "str" if str.length < size
  //"str" but trimmed at "size" length if str.length > size. It should have "..." at end included on the length.
  //If str.length is smaller than or equal to 3 char. the length of the dots is not add to the string length.
  //example:
  /*
  e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
  trim("Creating kata is fun", 14) should return "Creating ka..."
  e.g. trim("He", 1) should return "H...", because 1 <= 3
  */
  //pseudocode:
  /*
  -If the string length is less than or equal to the requested size, return the original string
  -If the requested size is less than or equal to 3 characters, return a string of length size 
  -consisting of the first size characters of the original string followed by "..." 
  -(without adding the length of the dots to the string length).
  -Else, return a string of length size consisting of the first size - 3 characters of the original string followed 
  -by "..." (with the length of the dots included).
  */
  