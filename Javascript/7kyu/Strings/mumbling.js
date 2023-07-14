//PREP:
//PARAMETERS: we recive "s" as as string of random letters.
//RETURN: we must return a new string that contains all the "s" elements multiplied by it's own index.
//EXAMPLE:
/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
//PSEUDOCODE:
/*
-We define a variable to store the output string.
-Iterate through "s" and store the single letter into a variable.
-Capitalize the first letter of each sequence
-Add the letter repeated based on its index
-Add a hyphen if it's not the last character
*/

function accum(s) {
    let output = "";
  
    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
  
      output += letter.toUpperCase();
  
      if(i !== 0) {
      output += letter.toLowerCase().repeat(i);
        }
  
      if (i !== s.length - 1) {
        output += "-";
      }
    }
    return output;
  }