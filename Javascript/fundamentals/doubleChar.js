/*

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

*/


//PREP:
//PARAMETERS: We receive "str" as a string of words.
//RETURN: we must return a new string in which each character of "str" is repeated once.
//EXAMPLE:
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
//PSEUDO-CODE:
/*
-We declare a new variable and assign a value of an empty string.
-We loop through "str" and in it we redeclared "newStr" value by concatenating its "old value" with "str[i]" by two.
-After the loop through "str" ends, we return the final value of "newStr"
*/

// function doubleChar(str) {
//   let newStr = '';
//   for(let i = 0; i < str.length; i++) {
//    newStr = `${newStr}${str[i]}${str[i]}`
//   }
//   return newStr
// }

//Arrow function

const doubleChar = str => str.split('').map(x => x + x).join('')
