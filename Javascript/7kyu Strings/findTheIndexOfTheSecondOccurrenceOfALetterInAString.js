// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1



//PREP:
/*
-PARAMETERS:  we receive "s" as a string that can contain words. We also receive "symbol" as a string with a letter.
-RETURN: We must return an INTEGER. This integer will be -1 if "s" does not contains "symbol" or contains it just once. Otherwise, if "symbol" appears two times into "s" we return the index of it.
-EXAMPLE: 
('Hello world!!!','l') ->>> 3
('Hello world!!!', 'o') ->>> 7
('', 'q') ->>> -1
('Hello', '!') ->> -1
-PSEUDOCODE:
--Almacenamos el valor que recibimos de utilizar indexOf(symbol) en una variable llamada "first"
--Validamos si first es equivalente a -1 y devolvemos -1 si es true.
--Armamos un for loop declarando i === al valor de first + 1, es decir, el próximo elemento de "s".
--Validamos si el valor de s[i] es igual a symbol, si da true retornamos "i" como index de la segunda ocurrencia
--Si no se cumple ninguna de estas condiciones retornamos -1
*/

const secondSymbol = (s, symbol) => {
    let first = s.indexOf(symbol) 
    if(first === -1) {
      return -1
    }
  
    for(let i = first + 1; i < s.length; i++) {
      if(s[i] === symbol) {
        return i
      }
    }
    return -1
  }