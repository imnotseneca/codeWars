/**Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5' */


function encode(str) {
    let splitedStr = str.split('')
    let finalResult = ''
    let alphabetDic = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5,
      'f': 6,
      'g': 7,
      'h': 8,
      'i': 9,
      'j': 10,
      'k': 11,
      'l': 12,
      'm': 13,
      'n': 14,
      'o': 15,
      'p': 16,
      'q': 17,
      'r': 18,
      's': 19,
      't': 20,
      'u': 21,
      'v': 22,
      'w': 23,
      'x': 24,
      'y': 25,
      'z': 26,  
    }
    for(let i = 0; i < splitedStr.length; i++ ) {
      if(alphabetDic[splitedStr[i].toLowerCase()]) {
        finalResult += `${alphabetDic[splitedStr[i].toLowerCase()]}`
      }
      else {
        finalResult+= splitedStr[i]
      }
    }
    return finalResult
  }
  
  //prep:
  //params: we receive "str" as a string of letters and symbols
  //return: we must return a string with the number equivalent of only the letters we found in "str"
  //example:
  /*
  encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
  encode('codewars') == '315452311819'
  encode('abc-#@5') == '123-#@5'
  */
  //pseudocode:
  /*
  -We declave a variable named "splitedStr" that will hold an Array as a datatype. 
  -This Array will hold the result of using the .split('') metthod on "str". 
  -We should see something like this:
  -"str" = "abc" => ['a','b','c'].
  -We declare "finalResult" as the variable that will hold our string of numbers and symbols.
  -We define a dictionary where we match every alphabet letter by a number, it should be something like:}
  alphabetDic = {
    'a': 1,
    'b': 2,
    'c': ...
  }
  -We iterate over "splitedStr" and check if the element iteraded matchs a key on the dictionary. 
  -if true, we send the value of the the key to finalResult
  -else the send the value of the element iterated.
  -we return finalResult.
  */