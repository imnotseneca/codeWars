/**Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */

function findLongest(array){  
  
    let mostDigit = 0;
    
    for(let i = 0; i < array.length; i++) {
      
      const currentElement = array[i].toString();
      
      if (currentElement.length > mostDigit.toString().length) {
        mostDigit = array[i];
      }
    }
  
    return mostDigit;
  }
  
  
  /*
  params: we receive "array" as an array of positive number integers.
  return: we must return the element with the most digits from "array"
  example:
  
  pseudocode:
  -create a variable to store "mostDigit" number
  -iterate over array
  -create a variable to store current element transformed into string.
  -check if current element length it's greater than mostDigit length (should be string too)
  -if true, mutate mostDigit to the current number element.
  -return mostDigit
  
  
  */