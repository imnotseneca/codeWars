//PREP:
/*
-PARAMETERS: we receive "str" as a string that can be empty or have words. And "letter" which is a string of letters that cannot be empty.

-RETURN: we must return an integer of the count of occurrences the 2nd argument is found in the first one.

-EXAMPLE:

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

-PSEUDOCODE:
.We create a variable "matchOccur" declare it's value to 0.
.We iterate through "str" and if it includes(letter) we sum 1 to matchOccur
.We return  matchOccur
*/


function strCount(str, letter){  
  let matchOccur = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i].includes(letter)) {
      matchOccur += 1
    }
  }
  return matchOccur
}

//Using High order functions

const strCount = (str,letter) => str.split('').filter(e => e == letter).length