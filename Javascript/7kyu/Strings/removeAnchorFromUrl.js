/**
 * 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
 */



function removeUrlAnchor(url){
  let index = url.indexOf('#')
  return index !== -1 ? url.slice(0,index) : url
}

//prep
//params: we receive "url" as a string of letters that represents an url itself.
//return: we must return a string of the "url" sliced at "#" if exists.
//example:
/*
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/
//pseudocode:
/*
-we declare a variable named index and store the indexOf "#"
-we validate if index !== -1, if true we return the url sliced from 0 to index, else return url

*/