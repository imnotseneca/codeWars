/*

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

PREP:
/PARAMETERS: we receive "s" as a string of words.
/RETURN: we must return a new string of "s" but removing the last exclamation marks at the end of it.
/EXAMPLE:
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/


function remove(s){
if(s[s.length-1] == '!'){
return s.split('').slice(0,s.split('').length-1).join('');
} else {
return s;
  }
}


//Arrow function 

const remove = s => s[s.length-1] === '!' ? s.split('').slice(0,s.split('').length-1).join('') : s;