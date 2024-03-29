/**The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

Examples
original number =2997 , n=3
2997 = 222+999+999+777 and here each digit is concatenated three times.

original number=-2997 , n=3

-2997 = -222-999-999-777 and here each digit is concatenated three times.
Task
Write a function named checkConcatenatedSum that tests if a number has this generalized property. */

/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false


*/

function checkConcatenatedSum(num, times) {
    // Convert the number to a string to easily manipulate its digits
    let numStr = Math.abs(num).toString();
  
    // Calculate the sum of concatenated digits
    let concatenatedSum = 0;
    for (let i = 0; i < numStr.length; i++) {
      concatenatedSum += parseInt(numStr[i].repeat(times));
    }
  
    // Check if the concatenated sum equals the original number
    return concatenatedSum === Math.abs(num);
  }