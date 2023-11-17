/**Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck! */

function solve(words) {
    // Function to check if a letter is in its correct position
    function isInCorrectPosition(letter, index) {
      const alphabetPosition = letter.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
      return alphabetPosition === index;
    }
  
    // Function to count the number of letters in correct positions for a word
    function countCorrectPositions(word) {
      return word.split('').reduce((count, letter, index) => {
        if (isInCorrectPosition(letter, index + 1)) {
          return count + 1;
        }
        return count;
      }, 0);
    }
  
    // Map each word to the count of letters in correct positions
    const result = words.map(countCorrectPositions);
  
    return result;
  }