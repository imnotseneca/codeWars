// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.



function nthChar(words){
    let finalResult = ''
    if(words.length === 0){
      return finalResult
    }
     for(let i = 0; i < words.length; i++) {
       finalResult += words[i][i]
     }
     return finalResult
   }
    
   /*
   -params:
   --we receive "words" as an array of words
   -return:
   --we must return a string where every letter comes from the "words" element at the corresponding index.
   -example:
   ["yoda", "best", "has"]  -->  "yes"
     ^        ^        ^
     n=0     n=1     n=2
   -pseudocode:
   --declare a variable called finalWord as empty string.
   --check if "words" is empty and return finalWord
   --iterate over words and get the letter at the element's index
   --mutate finalResult with the letters given
   -return final result
   
   
   */