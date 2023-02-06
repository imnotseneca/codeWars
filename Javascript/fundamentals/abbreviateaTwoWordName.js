/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

//PREP:
-PARAMETERS: we get "name" as a string of word that forms a firstName and a LastName.
-RETURN: we must return a new string that extracts firstLetter of firstName and firstLetter of lastName joined by a "." uppercased.
-EXAMPLE:
-Sam Harris => S.H
-patrick feeney => P.F
*/

function abbrevName(name){
    const arrName = name.split(' ');
    return (arrName[0][0] + '.' + arrName[1][0]).toUpperCase()
   
   }


   const abbrevName = name => name.split(' ').map(x => x[0].toUpperCase()).join('.')