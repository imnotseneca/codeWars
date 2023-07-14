/**
 * In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
 */


//PARAMETERS: we receive three params:
//"a" which is equal to a positive INT that tell us where the progression start
//"d" which is equal to a INT that tell us how the progression should be
//"n" which is equal to a positive INT that tell us where the progression ends
//RETURN: we must return a string of numbers separated by "," showing the progression.
//EXAMPLE: 
//(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26")
//(1, 0, 5), "1, 1, 1, 1, 1")

function arithmeticSequenceElements(a, d, n) {
    let arr = [a];
    for(let i = 0; i < n - 1; i++) {
        let sum = arr[i] + d;
        arr.push(sum)
    }
    return arr.join(', ')
  }