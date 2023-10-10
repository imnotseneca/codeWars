/**In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces. */



function makeString(s){
    let finalResult = "";
    let splitArr = s.split(' ')
    for(let i = 0; i < splitArr.length; i++) {
      finalResult  += splitArr[i][0]
    }
    return finalResult
  }
  
  /*
  params: we receive "s" as the only parameters and that will be string words
  return: we must return the first letter of every word.
  example:
  "This Is A Test" ==> "TIAT"
  pseudocode:
  -Create a new variable to hold every word as element from an array
  -Create a variable that will hold the final value of "s"
  -Iterate over every element and grab the first char.
  -add those first char to finalResult
  -return finalResult
  */