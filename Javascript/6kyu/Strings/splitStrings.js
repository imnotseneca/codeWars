/**
 * 
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */

//prep
/*
params: we receive "str" as a string of characters.
return: we must return an array that contains elements that are two character strings splited from "str". Elements always must have 2 characters. If we run out of char from "str" we add "_"
example:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
pseudocode: 
-define a new variable called "arr" with a value of []
-iterate over 'str' where 'i' = 0 while i < str.length we add 2 to 'i'.
-in the iteration we check if exist an element next to the actual element we are iterating. if true we push actual element and next element. If false we push actual element plus '_'

*/

function solution(str){
    let arr = []
    for(let i = 0; i< str.length; i +=2) {
      if(str[i] && str[i+1]) {
        arr.push(`${str[i]}${str[i+1]}`)
      } 
      else if (str[i] && !str[i+1]) {
      arr.push(`${str[i]}_`)
    }
  }
    return arr
  }