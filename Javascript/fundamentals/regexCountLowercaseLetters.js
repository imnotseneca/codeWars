/**Your task is simply to count the total number of lowercase letters in a string. */


function lowercaseCount(str){
    let counter = 0;
  const regex = /[a-z]/
  for(let i = 0; i<str.length; i++) {
    if(regex.test(str[i])) {
      ++counter
    }
  }
  return counter
}

//prep:
//paarams: we receive "str" as a string of characters.
//return: we must return a number that represents the total of lowercased letters str has.
//example:
/*
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/
//pseudocode:
/*
-declare a counter variable
-declare a regex variable for lowercase letters
-iterate over str
-make a condition to test the regex into str iterated element.
-if true ++counter
-return counter
*/