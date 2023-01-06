//PREP:
//PARAMETERS: we have two parameters. One is "numbers" which represent an array of integers. The other is "divisor" which represent an integer.
//RETURN: we must return an array, new or not that holds integers values("numbers") that are divisible by "divisor".
//EXAMPLE: [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
//PSEUDOCODE: 
/*
-we must iterate through the array of numbers.
-we must check if any of those element numbers are divisible by "divisor"
-Return an array, new or the old modified that holds the elements that complete the condition.
*/

// function divisibleBy(numbers, divisor){
//   let newArr = [];
//   for(let i = 0; i<numbers.length;i++) {
//     if(numbers[i] % divisor === 0) {
//       newArr.push(numbers[i])
//     }
//   }
//   return newArr
// }

const divisibleBy = (numbers, divisor) => numbers.filter (e => e % divisor === 0)