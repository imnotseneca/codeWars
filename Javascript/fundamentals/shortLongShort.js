/*


Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).


//PREP:
//PARAMETERS: we receive two parameters that are strings, "a" and "b"
//RETURN: we must return a new string that concatenates both parameters with this condition "short+long+short"
//EXAMPLE:
//("1", "22") --> "1221"
//("22", "1") --> "1221"

*/


function solution(a, b){
  if (a.length < b.length) {
   return a + b + a
 }
  return b + a + b
}

//arrow function 

const solution = (a,b) => a.length < b.length ? a + b + a : b + a + b