/**Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels. */



//with dictionary
function vowel2index(str) {
    const vowelDic = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true
    }
    let finalStr = '';
    for(let i = 0; i < str.length; i++) {
      if(vowelDic.hasOwnProperty(str[i])) {
        finalStr += `${i+1}`
      } else {
        finalStr += str[i]
      }
    }
    return finalStr
  }
  


 // with regex. 
  function vowel2index(str) {
    let finalStr = ''
    const regex = /[aeiou]/gi
    for(let i = 0; i < str.length; i++) {
      if(str[i].match(regex)) {
        finalStr += `${i+1}`
      } else {
        finalStr += str[i]
      }
    }
    return finalStr
  }

  //with array: 
  function vowel2index(str) {
    let finalStr = ''
    const vowels = ['a','e','i','o','u']
    for(let i = 0; i < str.length; i++) {
      if(vowels.includes(str[i])) {
        finalStr += `${i+1}`
      } else {
        finalStr += str[i]
      }
    }
    return finalStr
  }

  //params: we receive "str" as a string of words.
  //return: we must return a string mutated from "str" where all the vowels are replaced for a number strings that represents
  //its index position.
  //example:
  /*
  vowel2index('this is my string') == 'th3s 6s my str15ng'
  vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
  vowel2index('') == ''
  */
  //pseudocode:
  //declare a dictionary "vowelDic" with all the vowels set to true.
  //iterate over str and check if the element its a vowel. if true, replace it with the index number.
  //return str
  