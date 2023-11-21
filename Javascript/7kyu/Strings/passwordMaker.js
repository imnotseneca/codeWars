/**One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0" */

function makePassword(phrase) {
  let finalWord = "";
  let phraseSplit = phrase.split(" ");
  for (let i = 0; i < phraseSplit.length; i++) {
    if (phraseSplit[i][0] === "i" || phraseSplit[i][0] === "I") {
      finalWord += "1";
    } else if (phraseSplit[i][0] === "o" || phraseSplit[i][0] === "O") {
      finalWord += "0";
    } else if (phraseSplit[i][0] === "s" || phraseSplit[i][0] === "S") {
      finalWord += "5";
    } else {
      finalWord += phraseSplit[i][0];
    }
  }
  return finalWord;
}

/*
  PREP:
  
  params: we receive "phrase" as a string of words
  
  return: we must return as a string represented the first letter of each word
  -if this letter is i or i or I put the number 1 in the password;
  -if this letter is o or O put the number 0 in the password;
  -if this letter is s or S put the number 5 in the password;
  
  example:
  "Give me liberty or give me death"  --> "Gml0gmd"
  "Keep Calm and Carry On"            --> "KCaC0"
  
  pseudocode:
  -we first create a variable "finalWord" that will store final value.
  -we first split this string into an array separating every word.
  -we iterate over the array and check for the first letter of the element.
  -we make the validations and add it to "finalWord".
  -we return finalWord.
  
  */
