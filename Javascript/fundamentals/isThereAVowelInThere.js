// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//PREP:
//PARAMETERS: 'a' as an array of numbers.
//RETURN: the resulting array from 'a' if there are vowels
//EXAMPLES: [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
//Pseudo code: 1) iterate trough 'a' to find a match with vowels and test for CharCode.

const isVow = a => a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x)