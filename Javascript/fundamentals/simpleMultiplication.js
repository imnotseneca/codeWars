//Simple multiplication

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//Arrow function 

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9

//Function expression 

const simpleMultiplication = function(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}