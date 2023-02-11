//PREP
//PARAMETERS: we have an "array" of positive numbers integers
//RETURN: we must return a Number that represent the average of the "array" numbers.
//EXAMPLE: 
// [1,2,3]), 2
// [1,2,3,4]), 2.5
//Pseudo code:
//We declare "average" variable to 0, this will store the sum of all the numbers from "array"
//If the array length is not 0 we will iterate through "array" summing the numbers to "average"
//Else we will return 0.
//Finally we return "average" divide by the length of "array" and get our average of numbers

function findAverage(array) {
    let average = 0;
    if(array.length > 0) {
      for(let i = 0; i < array.length; i++) {
        average += array[i]
      }
    } else {
      return 0
    }
    return average / array.length;
  }

  const findAverage = array => array.length > 0 ? array.reduce((acc,curr) => acc + curr, 0) / array.length : 0