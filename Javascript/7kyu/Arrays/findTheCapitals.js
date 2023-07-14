/**
 * 
 * Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 */


//PARAMETERS: "word" as a string of word.
//RETURN: we must return an array of numbers, that represent the indexes of all the uppercase letter from "word"
//EXAMPLE: ('CodEWaRs'), [0,3,4,6]
//PSEUDOCODE:
//Define a new empty array
//Iterate through word elements.
//Check if element is equal to element.toUpperCase().
//If true, push its index to new array.
var capitals = function (word) {
    let arr = []
    for(let i = 0; i < word.length; i++) {
      if(word[i] === word[i].toUpperCase()) 
        arr.push(i)
    }
  return arr
};