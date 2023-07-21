/**
 * 
 * Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
 */


function last (x) {
    const arr = x.split(' ');
    const mapArr = arr.map(word => [word, word.slice(-1)])
    const sortedArr = mapArr.sort((a,b) => a[1].localeCompare(b[1]));
    return sortedArr.map(element => element[0])
  }
  
  //prep
  /*
  //params: we receive "x" as a string of words.
  //return: we must return an array of the words, sorted alphabetically by the final character in each.
  -If two words have the same LAST-LETTER, the returned array should show them in the order they appeared in "x"
  //example: (
  'man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  ('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
  //pseudocode:
  -split "x" into an array of words.
  -map each word to an array of two elements containing the word itself and its last letter. 
  -sort the mapped array based on the last letter of each word using localeCompare() to ensure alphabetical comparision.
  -return -> map the sorted array to extract only the words and store them in the result array.
  
  */