/**Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid. */

function digits(n) {
  let numToStr = String(n);
  return numToStr.length;
}

/*
  params: we receive "n" as a number integer.
  return: we must return the number of digits (length) of "n" as a number integer.
  example:
   [0, 1],
      [9, 1],
      [66, 2],
      [12345, 5],
      [128685, 6],
      [9876543210, 10],
      [9007199254740991, 16]
      
  pseudocode:
  -We declare a variable called numToStr and convert "n" into string.
  -We return numToStr.length
  */
