//PREP:
//PARAMETERS: "haystack" is an array of string words.
//RETURN; after we find the string word "needle" we must return a new string saying that we already found it and the index of the element.
//EXAMPLE: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


function findNeedle(haystack) {
    for(let i = 0; i<haystack.length; i++) {
      if(haystack.includes('needle')) 
        {
          return "found the needle at position" + ' ' +haystack.indexOf('needle')
        }
      }  
    }