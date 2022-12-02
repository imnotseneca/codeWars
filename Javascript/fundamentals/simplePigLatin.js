// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt (str) {
    let strArr = str.split(' ');
    let pigLatin = [];
    for (let word of strArr) {
      if((/([a-zA-Z])/).test(word)) {
        pigLatin.push(word.substring(1) + word[0] + 'ay')
      } else {
        pigLatin.push(word);
      }
    }
    return pigLatin.join(' ');
  }


const pigIt = str => {
  let strArr = str.split(' ');
  let arrayContainer = [];
  for(let word of strArr) {
    if((/([a-zA-Z])/).test(word)) {
      arrayContainer.push(word.substring(1) + word[0] + 'ay')
    } else {
      arrayContainer.push(word);
    }
  }
  return arrayContainer.join(' ')
}


const pigIt = str => {
  let strArr = str.splice(' ');
  let arrayContainer = [];
  for(let word of strArr) {
    if((/([a-zA-Z])/).test(word)) {
      arrayContainer.push(word.substring(1) + word[0] + 'ay')
    } else {
      arrayContainer.push(word);
    }
  }
  return arrayContainer.join(' ')
}



const pigIt = str => {
  let strArr = str.splice(' ');
  let arrayContainer = [];
  for(let word of strArr) {
    if((/([a-zA-Z])/).test(word)) {
      arrayContainer.push(word.substring(1) + word[0] + 'ay')
    } else {
      arrayContainer.push(word)
    }
  }
  return arrayContainer.join(' ')
}

