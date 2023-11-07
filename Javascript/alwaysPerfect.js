/**While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive". */

function checkRoot(input) {
  // Define the regex pattern for valid input
  const pattern = /^(\d+),(\d+),(\d+),(\d+)$/;

  // Match the input string against the pattern
  const match = input.match(pattern);

  // Check if there is a match
  if (match) {
    // Extract the four consecutive numbers
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[2]);
    const num3 = parseInt(match[3]);
    const num4 = parseInt(match[4]);

    // Check if the numbers are consecutive
    if (num2 === num1 + 1 && num3 === num2 + 1 && num4 === num3 + 1) {
      // Calculate the product and check if it's a perfect square
      const product = num1 * num2 * num3 * num4 + 1;
      const squareRoot = Math.sqrt(product);

      // Check if the result is a perfect square
      if (Number.isInteger(squareRoot)) {
        return `${product}, ${squareRoot}`;
      } else {
        return "Not a perfect square";
      }
    } else {
      return "not consecutive";
    }
  } else {
    return "incorrect input";
  }
}

/*
  #params: we receive "string" as a string of numbers characters separated by comma.
  #return: we must return a two string number separated by comma. 
  First one will be the product of all number from "string" plus 1
  and the second number will be the square root of this number.
  If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".
  If string contains 4 numbers but not consecutive it returns "not consecutive".
  #example:
  checkRoot('4,5,6,7'), '841, 29')
  ('3,s,5,6'), 'incorrect input')
  
  #pseudocode:
  Define the regex pattern for valid input
  Match the input against the pattern
  Check if there is a match
  Extract the four consecutive numbers
  Check if the numbers are consecutive
  Calculate the product and check if it's a perfect square
  If the numbers are not consecutive, return "not consecutive"
  If there is no match, return "incorrect input"
  
  */
