// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

//PREP:
//PARAMETERS: we have "num" as a integer.
//RETURN: we must return "num" but as a string.
//EXAMPLE:
/*
123  --> "123"
999  --> "999"
-100 --> "-100"
*/


// const numberToString = num => `${num}`

// function numberToString(num) {
//   return num.toString()
// }

const numberToString = num => String(num)