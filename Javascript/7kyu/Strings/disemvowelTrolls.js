/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


*/

//PREP: 
//PARAMETERS: we receive "str" as a string of words.
//RETURN: we must return a new string of "str" without vowels.
//EXAMPLE:  "This website is for losers LOL!") -> "Ths wbst s fr lsrs LL!"
// "What are you, a communist?") -> "Wht r y,  cmmnst?"
//PSEUDO CODE:
/*
-We define a "vowels" string containing all the vowel characters. 
-We initialize an empty string "result" to store the non-vowel characters. 
-Then, we iterate through each character of the input string (str) using a for loop. 
-For each character, we convert it to lowercase (to handle both uppercase and lowercase vowels) and check if it is included in the "vowels" string using the includes method. 
-If the character is not a vowel, we append it to the result string.
*/


function disemvowel(str) {
    const vowels = "aeiou";
    let result = "";
    for(let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if(!vowels.includes(char)) {
        result += str[i]
      }
    }
    return result;
  }
  