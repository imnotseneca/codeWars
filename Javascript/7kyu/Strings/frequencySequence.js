/**Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1" */

function freqSeq(str, sep) {
    let finalResult = [];
    let tracker = 0;
    for(let i = 0; i < str.length; i++) {
      for(let j = 0; j < str.length; j++) {
        if(str[i] === str[j]) {
          tracker += 1 
        }
      }
      finalResult.push(tracker)
      tracker = 0;
    }
    return finalResult.join(sep)
  }
  
  //prep
  /*
  params: we receive two paramters
  --"str" a string of words.
  --"sep" a string separator.
  return: 
  --we must return a string of numbers separated by "sep"
  --the numbers represents how many times the letters from "str" appears.
  example:
  "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
  "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
  "^^^**$"     , "x" --> "3x3x3x2x2x1"
  pseudocode:
  -We declare a variable "finalResult" with empty array.
  -We declare a tracker variable as a number initialized as 0.
  -We make a for loop to iterate "str"
  -We make a another for loop to compare every element with the others.
  -Check if the element appears more than once and add 1 to tracker
  -push tracker to finalResult
  -make tracker 0 again.
  -return finalResult joined by "sep"
  */
  