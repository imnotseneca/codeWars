/**
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
 */


//PARAMETERS: we receive "s" as an string of one word.
//RETURN: we must check if "s" is odd or even. If odd, return the middle char of "s". 
//-If even, return the middle 2 char.
//EXAMPLE:
/*
("testing"),"t")("testing"),"t")
("middle"),"dd"

//PSUEDOCODE:
//
*/

function getMiddle(s) {
    const length = s.length;
    if(length % 2 === 0) {
      return s.slice((length / 2 - 1), (length / 2 + 1))
    } else {
      return s.slice((length / 2), (length / 2 + 1))
    }
  }