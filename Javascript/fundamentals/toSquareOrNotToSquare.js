/*PREP
-PARAMETERS: we get an "array" of integers
-RETURN: we must return a new array with processing every number of the input array, if the number has an integer sqr root, take it, else square the number.
-EXAMPLE: [4,3,9,7,2,1] -> [2,9,3,49,4,1]
-PSEUDOCODE: we must iterate through the array and check if every element has a sqr root, and do something with it.
*/

function squareOrSquareRoot(array) {
    let finalArray = [];
    for(let i = 0; i < array.length; i++) {
      if(Math.sqrt(array[i]) % 1 === 0) {
         finalArray.push(Math.sqrt(array[i]))
      } else {
        finalArray.push(array[i] * array[i])
      }     
    }
    return finalArray;
  }
  

  //one line 
  const squareOrSquareRoot = array => array.map(e => Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : e * e )