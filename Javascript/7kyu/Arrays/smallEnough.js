/**You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */


const smallEnough = (a, limit) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > limit) {
        return false; // If any element is greater than the limit, return false
      }
    }
    
    return true; // If all elements are below or equal to the limit, return true
  };
  
  
  /*
  prep
  -params: we receive "a" as an array of numbers int
  "limit" as a number integer.
  -return we must return a boolean. True if the numbers in "a" are below or equal to "a", else false.
  -example:
  [66, 101], 200), true)
  [78, 117, 110, 99, 104, 117, 107, 115], 100), false
  pseudocode:
  -we iterate over a and check if it element is greater than limit, if true, return false.
  */