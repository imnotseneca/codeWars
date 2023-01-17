/*
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


//PREP:
//PARAMETERS: we get "str" as a string of numbers.
//RETURN: we must return str transformed into Number data type.
//EXAMPLE: "1234" --> 1234.
//PSEUDO-CODE:
//The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
//When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.

*/

const stringToNumber = function(str){
    return Number(str)
   }