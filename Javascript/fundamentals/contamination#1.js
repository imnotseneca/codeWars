/*

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

*/

//PREP:
//PARAMTERS: we have "text" as a string of random words or letters. and "Char" as a random character string
//RETURN: we must return a new string with text.length filled with "char".
//EXAMPLE:  

// text before = "abc"
// character   = "z"
// text after  = "zzz"

const contamination = (text, char) => char.repeat(text.length)