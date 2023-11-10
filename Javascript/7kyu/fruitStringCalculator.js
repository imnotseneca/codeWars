/**You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
Should be a nice little kata for you :) */


function calculate(string) {
    const numRegex = /\d+/g; // Match one or more digits
    const operatorRegex = /(gains|loses)/; // Match "gains" or "loses"
  
    const numbers = string.match(numRegex); // Extract all numbers from the string
    const operator = string.match(operatorRegex); // Extract the operator
  
    if (numbers && operator) {
      const num1 = Number(numbers[0]);
      const num2 = Number(numbers[1]);
      
      if (operator[0] === "gains") {
        return num1 + num2;
      } else if (operator[0] === "loses") {
        return num1 - num2;
      }
    }
  
    // Handle the case where no match is found
    return null;
  }
  
  
  /*
  params: we receive "string" as a string of letters and digits.
  return: we must return the sum of substraction of the digits from "string" as numbers types.
  example:
  "Panda has 48 apples and loses 4"  -->  44
  "Jerry has 34 apples and gains 6"  -->  40
  pseudocode:
  # We first create a regex to match numbers 
  # We first create a regex to gains or loses
  # We create two variables to store numbers and operators.
  # We check if they exist and turn the values from numbers to Numbers Types.
  # Check the operator and do the math.
  # if no result return null
  */
