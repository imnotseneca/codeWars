/*

Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)
Good luck :)

*/

//PREP:
//PARAMETERS: we receive "s" as a string of letters in lowercase.
//RETURN: we must return true or false. Depending if the letters in "s" are ordered alphabetically.
//EXAMPLE:
/*
"asd" -> false
"door"-> true
"cell" -> true
*/
//PSEUDOCODE:
/*
-We create a new variable called "tracker" that will be a boolean with default value of true.
-We sort "s" and store it in "sorted" variable.
-We compare "s" and sorted, if they are equal we return tracker. Else, we make "tracker" to false.
*/

function alphabetic(s) {
    let tracker = true;
    let sorted = s.split('').sort().join('')
    if(s === sorted) {
      return tracker;
    } else {
      tracker = false;
    }
    return tracker
  }