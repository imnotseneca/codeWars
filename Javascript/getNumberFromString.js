/**
 * 
 * 
 * 
 * Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

//PREP:
/*
-PARAMETERS: we receive "s" as a string of letters and numbers.
-RETURN: we need to extract -string numbers- from "s" and return them as Numbers.
-EXAMPLE:
("123"), 123,
("this is number: 7"), 7
-PSEUDOCODE:
-We split "s" into array "arr".
-We declare new var as an empty arr that will use to push numbers.
-Make a for loop to iterate through "arr".
-Check if arr[i] is a Number and its not an empty space and push it to "newArr"

*/ 

function getNumberFromString(s) {
    const arr = s.split('')
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
      if(!isNaN(arr[i]) && arr[i] !== ' ') {
        newArr.push(arr[i])
      }
    }
    return parseInt(newArr.join(''));
  }
  
  //  W/ RegEx


  function getNumberFromString(s) {

    return +(s.replace(/\D/g,''))
  
  }