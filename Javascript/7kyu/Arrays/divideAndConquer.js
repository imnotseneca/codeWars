/*

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.


*/

//PARAMETERS: we receive "x" as an array mixed with string integers and num integers.
//RETURN: we must return the result of summing all the nonStringIntegers substracted by the summ of all stringIntegers.
//EXAMPLE:
/*
[9, 3, '7', '3']), 2
['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14
['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13
*/

function divCon(x){
    let stringNumbers = 0;
    let nonStringNumbers = 0
    for(let i = 0; i < x.length; i++) {
      if(typeof x[i] !== 'number') {
        stringNumbers += Number(x[i])
      }
    }
      for(let i = 0; i < x.length; i++) {
      if(typeof x[i] === 'number') {
        nonStringNumbers += x[i]
      }
    }
     return nonStringNumbers - stringNumbers   
  }