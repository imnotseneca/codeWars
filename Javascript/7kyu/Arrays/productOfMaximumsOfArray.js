/**Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 . */


const maxProduct = (numbers,size) => numbers.sort((a,b) => b - a).slice(0, size).reduce((acc, curr) => curr * acc, 1)

/*
params: we receive two types of params;
--"numbers" as an array of numbers integers.
--"size" as a number integer
return: we must return the product of the greatest numbers in "numbers" taking into account "size"
example:
maxProduct ({4, 3, 5}, 2) ==>  return (20)
5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
 8 * 9 * 10 = 720 .
pseudocode:
-Declare a variable called "sortedArr" and initialize it by sorting "numbers" in desc order. Slice  it from 0 to "size"
-Apply reduce method to "sortedArr" and multiply curr by acc, starting on 1
*/