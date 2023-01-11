//PREP:
//PARAMETERS: we get "numbers" as an array of integers.
//RETURN: we must return an integer that is the result of summing the squares of "numbers"
//EXAMPLES: [1,2]), 5
//PSEUDO-CODE:
/*
-we create a new variable (total) that holds the final result.
-we iterate through the "numbers" array
-we use the Math.pow on the elements and sum into the "total" variable
-we return total.
*/

function squareSum(numbers){
  let total = 0;
  for(let i = 0; i<numbers.length; i++) {
    total += Math.pow(numbers[i],2);
  }
  return total;
}

const squareSum = numbers => numbers.reduce((acc,e) => Math.pow(e,2) + acc,0)

// The Math.pow() static method returns the value of a base raised to a power.