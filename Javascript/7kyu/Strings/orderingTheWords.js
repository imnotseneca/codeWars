/*Description:
Given a string, you need to write a method that order every letter in this string in ascending order.

Also, you should validate that the given string is not empty or null. If so, the method should return:

"Invalid String!"
Notes
• the given string can be lowercase and uppercase.
• the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes
Examples
"hello world" => " dehllloorw"
"bobby"       => "bbboy"
""            => "Invalid String!"
"!Hi You!"    => " !!HYiou"
Good luck! Hope you enjoy it*/


function orderWord(s){
    if(!s || s === '') {
      return "Invalid String!"
    }
    return s.split('').sort().join('')
  }
  
  /*
  params: we receive "s" as a string of letters.
  return: we must return a method that order every letter in this string in ascending order.
  -should validate that the given string is not empty or null.  If so, the method should return "Invalid String!"
  pseudocode: 
  -check if s exist or its equal to empty string. if true return invalid string.
  -else return s into array sorted joined into str
  
  
  
  */