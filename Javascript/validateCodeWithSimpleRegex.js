/**Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number. */

function validateCode(code) {
  const rgx = /^[1-3]/;

  return rgx.test(code) ? true : false;
}

/*
  params: we receive "code" as number integers of any length.
  return: we should return a boolean based on the parameter. return true if "code" starts with 1 or 2 or 3. else return false
  examples:
      (validateCode(123), true);
      (validateCode(248), true);
      (validateCode(8), false);
      (validateCode(321), true);
      (validateCode(9453), false);
      
  pseudocode:
  -We first define the regex pattern. It should check if "code" starts with 1 or 2 or 3
  -Then we check the match between code and regex and return the boolean
  */
