// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//PREP:
//PARAMETERS: we get "string" as a string of words.
//RETURN: we must return a new string with lowecase vowel removed.
//EXAMPLE: "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

const shortcut = string => string.replace(/[aeiou]/gi, '')


//he replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

//The g and i modifiers have these meanings: g = global, match all instances of the pattern in a string, not just one. i = case-insensitive