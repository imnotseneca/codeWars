/**
 * Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

Consonants are letters used in English other than "a", "e", "i", "o", "u".

Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
 */
function countConsonants(str) {
    const uniqueCons = new Set();
    const vowelDictionary = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true
    };
    
    const consonantRegex = /^[a-zA-Z]/;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (consonantRegex.test(char) && !vowelDictionary[char] && !uniqueCons.has(char)) {
        uniqueCons.add(char);
      }
    }
    
    return uniqueCons.size;
  }
  
  
  //prep:
  //params: we receive "str" as a string of words.
  //return: we need to return a number int.
  //This number represent the times we cross over a consonant in "str"and only adding up 1t/c.
  //example:
  /*
  "add" ==> 1
  "Dad" ==> 1
  "aeiou" ==> 0
  "sillystring" ==> 7
  "abcdefghijklmnopqrstuvwxyz" ==> 21
  "Count my unique consonants!!" ==> 7
  */
  //pseudocode: 
  /*
  -we create uniqueCons = new Set to store unique consonants.
  -we create a dictionary for vowels.
  -declare a variable called "consonantRegex" where whe store a regex that matchs for alphabetic letters upper and lowecased.
  -we iterate over "str".
  -we declare a varible "char" for str[i] element lowercased.
  -if "char" is not in vowelDictionary and it's not on "uniqueCons" and it return true for testing regex we add to uniqueCons
  -we return the length of uniqueCons
  */
  
  
  //1t/c = 1 time per consonant