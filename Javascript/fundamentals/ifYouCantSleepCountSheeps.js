/*

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


//PREP:

-PARAMTERS: we receive "num" as a positive integer.
-RETURN: we must return a string of words that counts sheeps based con "num"
-EXAMPLE: (3), "1 sheep...2 sheep...3 sheep..."

*/

function countSheep (num) {
    let str = ''
    if(num === 0) {
      return ''
    } else {
      for(let i = 1; i <= num; i++) {
        str += `${i} sheep...`
      }
    }
  return str
  }

  //with arrays

  const countSheep = function (num) {
    let newArr = [];
    if(num === 0) {
      return ''
    } else {
    for(let i = 1; i<=num; i++) {
      newArr.push(`${i} sheep...`)
    }
  }
    return newArr.join('')
  }