//Remove First and Last Character


/* It's pretty straightforward. 
Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters. */

//Function declaration with splot, pop, shift, join method

function removeChar(str){
    let removedor = str.split('')
    let pop = removedor.pop('')
    let shift = removedor.shift('') 
    return removedor.join('');
    
  
  };

  //One line arrow function

  removeChar = str => str.slice(1,-1)