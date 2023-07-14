/**
 * 
 * You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.


 */

//params: we receive 'x' as a string of characters that contains a "C" representing a Cat 
//and "m" representing a mouse, between them, other characters that mark up the distance.
//return: we must return "Escaped!" if the char between "C" and "M" are more than "3". Else return "Caught!"
//example: ('C.....m'), "Escaped!" // ('C..m'), "Caught!"
//pseudocode:
//define two variables to store posible returns.
//define a variable to count char between C and M.
//iterate over the string and count.
//make the condition and return the result

function catMouse(x){
    const escaped = 'Escaped!'
    const caught = 'Caught!'
    let count = 0;
    for(let i = 0; i < x.length; i++) {
      if(x[i] === '.') {
        ++count
      }
    }
    if(count > 3) {
      return escaped
    } else {
      return caught
      }
  }