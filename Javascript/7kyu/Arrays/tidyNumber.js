/**Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not . */

function tidyNumber(n){
    let numberSplit = n.toString().split('')
    for(let i = 0; i < numberSplit.length -1; i++) {
      if(numberSplit[i] > numberSplit[i+1]) {
        return false
      }
    }
    return true
  }
  