/**Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not. */

function findChildren(santasList, children) {
    const setOfChildren = new Set()
    for(let i = 0; i < santasList.length; i++) {
      for(let j = 0; j < children.length; j++) {
        if(santasList[i] === children[j]) {
          setOfChildren.add(santasList[i])
        }
      }
    }
    return Array.from(setOfChildren).sort()
  }
  
  
  /* 
  params: we receive two types of params.
  -"santasList" is an array of string names
  -"children" is an array of string names
  return:
  -we must return an array of string names that matches between santaslist and children. Only one children, output shold be sorted.
  -pseudocode:
  -we create a new set called "setOfChildren"
  -we iterate over santasList and inside iterate over children.
  -we check if santasList[i] === children[j]
  -if true push it to setOfChildren.
  -return an array from setOfChildren sorted.
  */