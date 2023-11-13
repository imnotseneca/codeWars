/**Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified
 */

function nicknameGenerator(name){
    const vowel = /[aeiou]/
    if(name.length < 4) {
      return "Error: Name too short"
    }
    if(vowel.test(name[2])) {
      return name.substring(0,4)
    } else {
      return name.substring(0,3)
    }
  }
  
  
  /*
  params: we receive "name" as a string of names.
  return: we must return "name" but only with 3 characters if the third letter is consonant. If the third letter is not a consonat 
  we return "name" with 4 characters.
  If the string is less than 4 characters, return "Error: Name too short".
  example:
  --third letter as consonant:
  nickname("Robert") //=> "Rob"
  nickname("Kimberly") //=> "Kim"
  nickname("Samantha") //=> "Sam"
  --third letter as vowel:
  nickname("Jeannie") //=> "Jean"
  nickname("Douglas") //=> "Doug"
  nickname("Gregory") //=> "Greg"
  
  pseudocode:
  -We define a regex for vowel
  -we iterate over "name"
  -Test if third char is true for "vowel"
  -If true, substring "name" from 0 to 4, else from 0 to 3 chars.
  
  */