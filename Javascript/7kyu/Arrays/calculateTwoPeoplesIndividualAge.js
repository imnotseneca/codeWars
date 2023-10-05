/**Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative */

function getAges(sum, difference) {
    // Validate input
    if (sum < 0 || difference < 0) {
      return null;
    }
  
    let ages = [];
    // Calculate ages
    let age1 = (sum / 2) + (difference / 2);
    let age2 = (sum / 2) - (difference / 2);
  
    // Check for negative ages
    if (age1 < 0 || age2 < 0) {
      return null;
    }
  
    // Populate ages array
    ages.push(age1, age2);
  
    return ages;
  }
  
  /*
  params: 
  --we receive "sum" as a number integer that represent the sum of two people's ages.
  --we receive "difference" as a number integer that represent the difference between two people's ages.
  return: we must return an array with two values as positive integers that represent individual ages based on sum and difference.
  example:
  Test.assertSimilar(getAges(24,4), [14,10]);
  
  pseudocode:
  -Check if 0 is greater than sum or diff. if true return null
  -we declare "ages" as an empty array that will hold ages values.
  -we declare age1 and pass the value of (sum / 2 + difference / 2)
  -we declare age2 and pass the value of (sum / 2 - difference / 2)
  -we check if age1 or age2 is lesser than 0. if true return null
  -else we push them to ages array and return it. 
  
  
  */
  
  