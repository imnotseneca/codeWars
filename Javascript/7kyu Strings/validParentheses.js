/*

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

*/




//PREP:
//PARAMETERS: we receive "parenStr" as a string full of parentheses
//RETURN: we must return true if the order of the parentheses is valid, else false.
//EXAMPLE:  "()"  =>  true // ")(()))" =>  false // "(())((()())())"  =>  true
//PSEUDOCODE: 

/*
-We create a empty stack
-Define a dictionary of possible parentheses.
-Iterate trough "parenStr".
-Check if element been iterated is "(", if true we push it to stack.
-else it's ")" so we pop it from stack and check if the element now is not equal to ")", so we return false 
*/


const validParentheses = parenStr => {
  const stack = [];
  const parentheses = {
    "(" : ")"
  };
  for(let i = 0; i < parenStr.length; i++) {
    if(parenStr[i] in parentheses) {
      stack.push(parenStr[i])
    } else {
      const last = stack.pop();
      if(parenStr[i] !== parentheses[last]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}