/**
 * 
 * Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//PREP:
// -PARAMETERS: we receive "time" as a positive integer that represent the time Nathan go cycling
// -RETURN: we must return a new rounded number that represents the amount of water Nathan drinks over "time". 0.5 litres of water per hour of cycling.
// -EXAMPLE: time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

 */

const litres = (time) => {
    return Math.floor(time * .5)
  }