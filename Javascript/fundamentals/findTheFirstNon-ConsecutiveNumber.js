//Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

//Can you write a solution that will return null for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

//PREP
//PARAMETERS: we have an array that will have at least 2 elements, and all of them will be numbers. They will be unique and in ascending order, they could be positive or negative integers.
//RETURN: we must return the first element of the array that is not consecutive.
//EXAMPLE: [1,2,3,4,6,7,8], 6.

const firstNonConsecutive = arr => {
    let arrFind = arr.find((x,y) => x !== y + arr[0]);
    return Number.isInteger(arrFind) ? arrFind : null
  }
  
  //The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  //The Number.isInteger() static method determines whether the passed value is an integer.