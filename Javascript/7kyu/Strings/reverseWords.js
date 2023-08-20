/**Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
    let strReversed = '';
    let strSplit = str.split(' ');
    for (var i = 0; i < strSplit.length; i++) { 
      
      strReversed += strSplit[i].split('').reverse().join('');
        
      if (i < strSplit.length - 1) {
        
        strReversed += ' ';
        
      }
    }
    return strReversed;
  }
  
  //prep:
  //params: we receive "str" as a string of words.
  //return: we must return a string that contains all the words from "str" but reversed.
  //example:
  /*
  "This is an example!" ==> "sihT si na !elpmaxe"
  "double  spaces"      ==> "elbuod  secaps"
  */
  /*
  pseudocode:
  -we declare a new variable called "strReversed" to hold values that we going to ouput. 
  -we iterate over str 
  -use the method reverse() into every element 
  -reverse each word and add it to strReversed
  -add a space after each reversed word (except for the last word)
  -return strReversed
  */