/*

Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!

*/


//PREP:
/*PARAMETERS: we receive 3 input.
-First we receive "n" as an INT.
-firstValue that can be a boolean or a string
-secondValue that can be a boolean or a string
//RETURN: we must return a new array that has "n" length filled with fV and sV alternated.
//EXAMPLE:
(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
(5, true, false), [true, false, true, false, true]
*/
//PSEUDOCODIGO:
//Crear un nuevo array.
//si n === 0 devolver [];
//Creo un for loop que corra mientras i < n
//si i es par, pusheo firstValue, si no pusheo secondvalue.
function alternate(n, firstValue, secondValue){
    let result = [];
    if(n === 0) {
      return [];
    }
    for(let i = 0; i < n; i++) {
      if(i % 2 === 0) {
        result.push(firstValue)
      }
      else {
        result.push(secondValue)
      }
    }
    return result
  }