/**Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.

Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter. */

function initials(n){
    const arr = n.split(' ')
    const processed = arr.map((e, i) => i !== arr.length - 1 ? `${e.slice(0, 1).toUpperCase()}.` : `${e[0].toUpperCase()}${e.slice(1)}`)
      return processed.join('')
    
  }
  
  //params: we receive "n" as words string.
  //return: we must return the strings but Capitalized and only the last name with full letters.
  //EXAMPLE:
  //('Barack hussain obama', 'B.H.Obama')
  //('code wars', 'C.Wars')
  //pseudocode:
  //split n into arr
  //map over arr
  //while index is not arr.length - 1 then slice and keep only first Char to UpperCase
  //If element is the last one, we keep it full char and uppercase first char
  //return arr.join(' ')