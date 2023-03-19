/**
 * You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"


-PREP:
-PARAMETERS: we receive "string" as a string of words.
-RETURN: we must return a new string reversed.
-EXAMPLE:

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
 */


function reverse(string){
    return string.split(' ').reverse().join(' ')
  }

  
  //or

  const reverse = string => string.split(' ').reverse().join(' ')