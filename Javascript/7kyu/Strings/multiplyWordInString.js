/**You are to write a function that takes a string as its first parameter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string", 3, 5)  */


function modifyMultiply (str,loc,num) {
    const newStr = str.split(' ').slice(loc, loc+1).join('')
    const newArr = []
    for(let i = 0; i < num; i++) {
      newArr.push(newStr)
    }
      return newArr.join('-')
    }
  
  //params: we receive three parameters
  /*
  1-"str" representing a string of words.
  2-"loc" a num INT representing a location in "str"  
  3-"num" a num INT representing the times we need to multiply the "str" at "loc"
  */
  
  //return: we must return the "str" element at "loc" for "num" times as a string
  //example: ("This is a string",3 ,5), "string-string-string-string-string"
  //pseudocode: 
  /*
  -we declare a new variable called newStr to store str values we need.
  -we declare a new variable called newArr to store final value.
  -Declare a loop that will run "num" times and on it push "newStr" value to "newArr"
  -return newArr joined by "-"
  
  */