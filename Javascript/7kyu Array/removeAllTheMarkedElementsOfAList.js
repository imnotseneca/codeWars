/*

Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
Enjoy it!!

*/

//PREP:
//PARAMETERS: we receive "integer_list" as an array of integers, and "values_list" also an array of integers.
//RETURN: we must return a new array that removes all the "values_list" from "integer_list"
//EXAMPLE: 
/*
[1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2] ->>> [5, 6 ,7 ,8]
[8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3], [2, 4, 3] ->>>  [8, 7, 6, 5, 1]
*/
//PSEUDOCODE:
/*
-We use the high array method filter(), pass element as the parameter for every element in "integer_list" and we check if "values_list" doesn't include "element"

*/

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(element => !values_list.includes(element))
  }