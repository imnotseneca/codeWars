//PREP:
//PARAMETERS: we have "x" as a string of integer numbers.
//RETURN: we must return a new (newStr) string of integer numbers that is transformed from "x", if the number in "x" is greater than 5, return 1, otherwise return 0.
//EXAMPLE: ('45385593107843568'), '01011110001100111'
//PSEUDOCODE:
/*
-We declare to new variables;
-"newArr" will hold the value of "x" splited into array
-"newStr" will hold the future new string.
-We iterate through "newArr" and make a condition, if the element is greater than 5, we add 1 to "newStr", otherwise we add 0.
-We return newStr.
*/

function fakeBin(x){
    let newArr = x.split('')
    let newStr = '';
    for(let i = 0; i<newArr.length; i++){
      if(newArr[i] < 5) {
        newStr += '0'
      } else if (newArr[i] >= 5) {
        newStr += '1'
      }
    }
     return newStr;
   }

   const fakeBin = x => x.split('').map(n => n >= 5 ? 1 : 0).join('')