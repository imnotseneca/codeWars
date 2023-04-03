// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1


//PREP:
// PARAMETERS: we have "n" as a positive integer.
// RETURN: we must return how many times it takes to take "n" to 1 using "collatz conjeture"
// EXAMPLE:

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

const hotpo = (n) => {
    let total = 0
    if(n<2) {
        return 0
      }
    while(n > 1){
      if(n % 2) {
        n = n * 3 + 1
      } else {
         n = n / 2
        }
    total++
    }
    
    return total
    
}