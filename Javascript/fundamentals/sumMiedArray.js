/*
PREP:
-PARAMETERS: we have "x" as a mixed array of number strings and integers
-RETURN: we must return the sum of all elements converted to numbers integers.
-EXAMPLE:(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42
-PSEUDO.CODE: 
-we must iterate through the array converting strings into numbers and then sum them all.
*/
// function sumMix(x) {
//   let mapped = x.map(e => parseInt(e))
//   return mapped.reduce((acc,ele) => acc + ele, 0)
// }

// const sumMix = x => x.reduce((acc,x) => parseInt(x) + acc , 0)

function sumMix (x) {
    let total = 0;
    for(let i = 0; i < x.length; i++) {
      total += parseInt(x[i])
    }
    return total
  }