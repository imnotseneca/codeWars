/*
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
*/

//PREP

/*
-PARAMETERS: we receive "string" as strings that does or doesn't contain "Hi!". It can be repeated or not.
-RETURN: we must return the words from the sentence if they contain exactly one exclamation mark "!".
-EXAMPLE:
"Hi! Hi! Hi!" ->>> ""
"Hi!" ->>> ""
"Hi Hi! Hi!" ->>> "Hi"

*/

function remove(string) {
    //In this code, we first split the input sentence into an array of words using the split() method. 
      const words = string.split(' ');
      let result = '';
    //We then loop through each word in the array and count the number of exclamation marks in the word using a regular expression.
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        const count = (word.match(/!/g) || []).length;
    //If the word contains more or less than one exclamation mark, we append it to the result string with a space character.
        if (count !== 1) {
          result += `${word} `;
        }
      }
    // Finally, we return the result string with leading/trailing spaces removed using the trim() method.
      return result.trim();
    }
    
    