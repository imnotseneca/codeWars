//PREP:
//PARAMETERS: we have and string of words that will have at least one element. Words will always be separated by a space.
//RETURN: we must write a function that takes the String and returns an Array/list with the length of each word added to each element.
//EXAMPLE: ('apple ban'),["apple 5", "ban 3"]
//PSEUDOCODE:
/*
-split the string into an array and store it into a variable
-iterate through the new array and add a space and element length to each one.
*/

const addLength = str => str.split(' ').map(e => e + ' ' + e.length)
