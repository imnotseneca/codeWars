/* 
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

//PREP:
//PARAMTERS: we receive a "string" of words with string numbers on it
//RETURN: we must return a new string repalcing string numbers by its equivalent string letter
//EXAMPLE: ("L0ND0N"),"LONDON") ("DUBL1N"),"DUBLIN")("51NGAP0RE"),"SINGAPORE"



*/

function correct(string) {
    let newStr = string.split('');
    for(let i=0; i<newStr.length; i++) {
      if(newStr[i] === '1') newStr[i] = 'I'
      else if(newStr[i] === '5') newStr[i] = 'S'
      else if (newStr[i] === '0') newStr[i] = 'O' 
  }
    return newStr.join('')
  }
  
  //RegEx solution 
  
  //const correct = string => string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')