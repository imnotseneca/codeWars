/*
Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""

*/


/*
#Parameters: 
-we receive "equation" a string representing an equation in the form of "leftSide operator rightSide". 
-The left side and right side are represented by dots
-The operator is one of the valid operators: +, -, *, //.
-The equation will be in the format: "..... operator .........".
#Return:
-A string containing dots, representing the result of the equation. If the result is 0, return an empty string.
#Example:
("..... + ...............", "....................")
("..... - ...", "..")
*/


function dotCalculator (equation) {
    const [leftSide, operator, rightSide] = equation.split(' ');
    const leftCount = leftSide.split('.').length -1
    const rightCount = rightSide.split('.').length -1
    let result;
     switch(operator) {
         case '+':
           result = leftCount + rightCount;
           break;
         case '-':
           result = leftCount - rightCount;
           break;
         case '*':
           result = leftCount * rightCount;
           break;
         case '//':
           result = leftCount / rightCount;
           break;
         default:
         throw new Error('Invalid operator: ' + operator);
     }
     if(result === 0) {
       return "";
     }
     return '.'.repeat(result)
   }