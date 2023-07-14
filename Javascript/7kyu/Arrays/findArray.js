/*


You are given two arrays arr1 and arr2, where arr2 always contains integers.

Write the function find_array(arr1, arr2) such that:

For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] find_array returns ['a', 'a']

For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] find_array returns [1, 1, 1]

For arr1 = [0, 3, 4], arr2 = [2, 6] find_array returns [4]

For arr1=["a","b","c","d"] , arr2=[2,2,2], find_array returns ["c","c","c"]

For arr1=["a","b","c","d"], arr2=[3,0,2] find_array returns ["d","a","c"]

If either arr1 or arr2 is empty, you should return an empty arr (empty list in python, empty vector in c++). Note for c++ use std::vector arr1, arr2.


*/


//PARAMETERS: we receive "arr1" that is an array that can contain strgins or numbers.
// we also receive "arr2" that will be always numbers.
//RETURN: we must return the elements of "arr1" that has the index number marked by "arr2"
//EXAMPLE: 
/*
For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] find_array returns ['a', 'a']
For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] find_array returns [1, 1, 1]
For arr1 = [0, 3, 4], arr2 = [2, 6] find_array returns [4]
For arr1= ["a","b","c","d"] , arr2=[2,2,2], find_array returns ["c","c","c"]
*/
/*
PSEUDOCODE:
*/

function findArray(arr1, arr2){
    let arr = [];
    if(arr1.length === 0 || arr2.length === 0) {
      return []
    };
      for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] < arr1.length) {
        arr.push(arr1[arr2[i]]);
      }
    }
  
    return arr;
  }
  