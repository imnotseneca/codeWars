/**Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Positives

Repetition of numbers in the array/list could occur.

Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 20 is the product of all array's elements except the first element

The second element 12 is the product of all array's elements except the second element .

productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.

productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10

The second element 600 is the product of all array's elements except the second element 3

The Third element 360 is the product of all array's elements except the third element 5

The Fourth element 300 is the product of all array's elements except the fourth element 6

Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2 */

function productArray(arr) {
    const l = arr.length;
    
    const leftProducts = Array.from({ length: l }, (_, i) => arr.slice(0, i).reduce((a, b) => a * b, 1));
    const rightProducts = Array.from({ length: l }, (_, i) => arr.slice(i + 1).reduce((a, b) => a * b, 1));
  
    return arr.map((_, i) => leftProducts[i] * rightProducts[i]);
  }
  
  /*
  params: we receive "numbers" as an array of numbers integers. numbers size is at least 2 elements. Only positive integers.
  return: we must return a "product" array of the same size of "numbers" that contains the product of all elements on "numbers",
  except for the element iterated.
  example:
  
  productArray ({1,5,2}) ==> return {10,2,5}
  
  The first element 10 is the product of all array's elements except the first element 1. (5*2)
  
  The second element 2 is the product of all array's elements except the second element 5. (1*2)
  
  The Third element 5 is the product of all array's elements except the Third element 2. (1*5)
  
  pseudocode:
  -We declare "l" to store the length of the numbers array
  -We declare leftProducts variable and create a new Array with "l" length, as second parameter we plug a callback function
  -This callback function will take "_" as first parameter that represent the elements that we don't want to use, and "i" as the index
  -The callback function returns the result of slicing "arr" from 0 to i and reduce the product of elements initialized at 1
  -The same goes for the right side products but the arr.slice goes from i + 1
  -We then return a map of leftProducts * RightProducts
  
  */