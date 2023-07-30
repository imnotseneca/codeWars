// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


function swap (string) {
    return string.replace(/[aeiou]/g, (match) => match.toUpperCase());
   }
   
   //prep
   //params: we receive "string" as a string of letters.
   //return: we must return the string but with vowels uppercased.
   //example:
   /*
   
   Input : "Hello World!"
   
   Output : "HEllO WOrld!"
   
   */
   //pseudocode: 
   /*
   -we use the replace method from string
   -first parameters will be a regex that contains all the vowels.
   -second parameters its a callback function that receive the element that matched the regex as "match"
   -and return it Uppercased.
   */