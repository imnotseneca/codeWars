/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/


//PREP:
/*
-PARAMETERS: we receive "values" as an array of number INT.
-RETURN: we must return a new array with all the odd values on "values".
-EXAMPLE:
noOdds( [0,1] ), [0]
[0,1,2,3] ), [0,2]
-PSEUDOCODE:
-We create a new variable with empty array.
-We iterate through "values".
-Create an if condition for values that are "odd", if true we add them to "oddValues"
-We return oddValues.
*/


function noOdds( values ){
    let oddValues = [];
    for(let i = 0; i < values.length; i++) {
      if(values[i] % 2 === 0) {
        oddValues.push(values[i])
      }
    }
    return oddValues;
  }