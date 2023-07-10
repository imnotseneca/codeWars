/**
 * Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

Input	Output
string	String
hello World	Hello World
i love codewars	I love codewars
This sentence is already capitalized	This sentence is already capitalized
0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.
 */

String.prototype.capitalize = function capitalize() {
  if (this === '') {
    return '';
  }

  const firstChar = this.charAt(0);
  const capitalizedFirstChar = firstChar >= 'a' && firstChar <= 'z' ? String.fromCharCode(firstChar.charCodeAt(0) - 32) : firstChar;

  return capitalizedFirstChar + this.slice(1);
}
  /*
  
  -Define a function called capitalize that takes a string as input.
  -Check if the input string is empty. If it is, return an empty string.
  -Extract the first character of the string using the charAt(0) method.
  -Convert the first character to uppercase using the toUpperCase() method. Since this method is disabled for the Kata, you can use the ASCII code manipulation to convert the character to uppercase.
  -Concatenate the capitalized first character with the rest of the string (excluding the first character).
  -Return the modified string.
  
  */