//PREP:
//PARAMETERS: we have two arrays that contain only integers. "arr1" and "arr2"
//RETURN: we must return an array that merge "arr1 + arr2" removing duplicates and sorted in ascending order.
//EXAMPLE: [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//PSEUDO CODE: 
/*
-we declare a new variable "newArr" that contains an empty array.
-we make a for loop that iterates through that arrays and check if "newArr" includes the element that is being iterated.
-if "newArr" does not contain the element, we push to it.
-We return "newArr" sorted in ascending order.
*/


function mergeArrays(arr1, arr2) {
  const newArr = [];
  for(let i = 0; i<arr1.length; i++) {
    if(!newArr.includes(arr1[i])) {
      newArr.push(arr1[i])
    }
  }
    for(let i = 0; i<arr2.length; i++) {
    if(!newArr.includes(arr2[i])) {
      newArr.push(arr2[i])
    }
  }
  return newArr.sort((a,b)=> a - b);
}


const mergeArrays = (arr1, arr2) => Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));