/**Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

 */

function evenLast(numbers) {
    let finalResult = 0
    if(numbers.length === 0) {
      return 0
    }
    for(let i = 0; i < numbers.length; i++) {
      if(i % 2 === 0) {
        finalResult += numbers[i]
      }
    }
    return finalResult * numbers[numbers.length - 1]
  }
  
  //prep
  //params: we receive "numbers" as an array of numbers integers
  //return: 
  //we must return a number that represents the sum of all the numbers localted at even index
  //multiplied by the number at the last index
  //example:
  /*
  evenLast([2, 3, 4, 5]), 30)
  */
  /*
  pseudocode:
  -we declare a finalResult variable initialized at 0 to store the return.
  -make an if statment to check the length of numbers, if its zero we return 0
  -we make a for loop to iterate over numbers
  -declare an if statment to check if the element is even, if true we sum it to finalResult.
  -we return finalResult * numbers[numbers.length-1]
  */