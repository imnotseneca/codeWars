// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres


/*
PREP: we receive "mpg" which represent "miles per gallon" a number INTEGER.
RETURN: we must return the equivalent Number of kilometers per liter, based on "mpg"
EXAMPLE: (converter(10), 3.54) --  (converter(20), 7.08) -- (converter(30), 10.62)
PSEUDOCODE:
-We multiplicate mpg by the kilometers equivalent for 1 mile and divide it by the liters equivalent to 1 imperial gallon.
-We fix the result and make it a number.
*/


function converter (mpg) {
    const number = mpg * 1.609344  / 4.54609188;
     return Number(number.toFixed(2))
   }