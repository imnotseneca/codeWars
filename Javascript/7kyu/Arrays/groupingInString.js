//PREP
/*
PARAMETERS: we receive "str" as a string of positive numbers.
RETURN: we must return true if the string elements are grouped together.
EXAMPLE: 

("112200"), true
("1222334556667"), true
("001234400522"), false

PSEUDOCODIGO:
//We made a "seen" variable and store a new Set and a "latest" variable without value.
//We iterate through "str" and check if char doesn't exist in "seen" if true we add latest to it.
//Else if latest is not equal to char we return false
//
*/

const isConsecutive = (str) => {
    const seen = new Set();
    let latest;
  
    for (const char of str)
      if (!seen.has(char)) seen.add((latest = char));
      else if (latest !== char) return false;
  
    return true;
  };