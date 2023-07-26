/**Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur. */


const filterString = (value) => {
    let result = ''
    for(let i = 0; i< value.length; i++) {
      if(!isNaN(value[i])) {
        result += value[i]
      }
    }
    return +result
  }
  
  //prep
  //params: we receive "value" as a string of letters and numbers.
  //return: we must extract the numbers from "value" and return them as number type.
  //example:
  /*
  ("123"), 123, 'Just return the numbers');
  ("a1b2c3"), 123, 'Just return the numbers');
  */
  //pseudocode:
  /*
  -create a variable called "result" as an empty string to store the numbers.
  -iterate over each value.
  -check if the value[i] !isNaN().
  -push the values to "result" and return
  
  */