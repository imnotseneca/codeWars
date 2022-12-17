// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]
//PREP
//Parameters: "n" as a positive integer major to 0.
//Return a new array containing all the numbers till reaching "n"
//Examples: // 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]
//Code: 
function monkeyCount(n) {
    let newArray = [];
    for (let i = 1; i<=n; i++) {
      newArray.push(i)
    }
      return newArray
    }