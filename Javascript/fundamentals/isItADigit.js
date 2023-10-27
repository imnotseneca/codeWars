/**Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript
 */

String.prototype.digit = function() {
    return /^\d$/.test(this);
  };
  
  //^\d$ is a regular expression that matches a single digit (0-9).
  //test(this) checks if the current string satisfies the regular expression.