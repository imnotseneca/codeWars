/**
 * Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().


 */


function add(a, b){
    return a == b
  }

/*

Data coercion, or type coercion, is the process by which JavaScript converts the value of a variable from one type to another. This process occurs when an operation is executed where one operand contains a value of a certain data type, but the other operand has a value of another type.

The JavaScript interpreter performs type conversion to adapt to the operations defined in your code. In this way, the value assigned to one of the variables involved in the operation is converted to an "equivalent" value of the data type of the other operand.

Through data coercion, JavaScript allows you to operate on values regardless of whether they are of different data types. You can add the value of a number-type variable to a string value. You can also compare a boolean value with a number value. You can concatenate a number with a string and form a new text string. This gives you flexibility when creating your functions in JavaScript, but also helps make your code more readable.

While JavaScript can apply data coercion automatically and implicitly, we also have the option of defining the data type to which we want to convert a certain value.

*/