// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


//PREP
/*
-PARAMETERS: we receive "size" as a number integer.  
-RETURN: we must return a string of alternating "1" and "0" equally directed by "size" value
-EXAMPLE: 
a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

-PSEUDOCODE:
*/


function stringy(size) {
    let str = ''
  for(let i = 1; i <= size; i++) {
    str = str + i % 2  
  }  
    return str
  }