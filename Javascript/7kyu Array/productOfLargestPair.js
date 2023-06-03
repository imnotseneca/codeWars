/*

Parameters:
-The function maxProduct takes in a single parameter "a", which is an array of positive numbers. 


Return:
-The function returns the product of the two largest integers in the input array.
-This array contains the elements for which we need to find the product of the two largest integers.

Examples:
-Here are the examples provided in the original challenge:

maxProduct([2, 1, 5, 0, 4, 3]) should return 20 because the two largest integers in the array are 5 and 4, and their product is 20.
maxProduct([7, 8, 9]) should return 72 because the two largest integers in the array are 8 and 9, and their product is 72.
maxProduct([33, 231, 454, 11, 9, 99, 57]) should return 104874 because the two largest integers in the array are 454 and 231, and their product is 104874.

Pseudocode:
-Initialize two variables, "max1" and "max2", to negative infinity.
-These variables will store the two largest integers in the array.
-Iterate through each element num in the array, using the index "i" from 0 to a.length.
-Inside the loop:
--Check if num is greater than or equal to max1.
--If true, update max2 to the current value of max1, and update max1 to num.
--Otherwise, check if num is greater than max2.
--If true, update max2 to num.
--After the loop, the variables max1 and max2 will contain the two largest integers in the array.
-Return the product of max1 and max2 as the result.
*/


function maxProduct(a) {
    let max1 = 0;
    let max2 = 0;
     for(let i = 0; i < a.length; i++) {
       const num = a[i];
       if(num >= max1) {
         max2 = max1;
         max1 = num;
       } else if (num > max2) {
         max2 = num;
       }
     }
     return max1 * max2;
   }
 
