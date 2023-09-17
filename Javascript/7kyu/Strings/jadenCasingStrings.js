/**Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org */


String.prototype.toJadenCase = function () {
    let words = this.split(' ')
    for(let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(' ')
  };
  
  /*
  
  String.prototype.toJadenCase = function () { }:
  
  -This line is defining a new method called toJadenCase that can be used on all JavaScript strings. 
  -It's adding a new function to the String prototype, which means that every string object in JavaScript 
  -will have access to this function.
  
  pseudocode:
  -We declave a new variable "words" and assign its value to this.split(' ') to make an array of elements from "String".
  -We iterate over words elements and redefine the element to Capitalize the word using:
  -method charAt(0) to select the first letter and make it uppercase
  -method slice(1) to append the rest of the letters to the word
  -We return words using .join(' ') method.
  
  
  
  
  
  */