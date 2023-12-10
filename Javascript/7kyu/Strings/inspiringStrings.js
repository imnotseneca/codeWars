/**When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold */

function longestWord(stringOfWords) {
  const words = stringOfWords.split(" ");

  if (words.length === 0) {
    return null; // Return null for an empty string
  }

  const maxLength = Math.max(...words.map((word) => word.length));
  const longestWords = words.filter((word) => word.length === maxLength);

  return longestWords[longestWords.length - 1];
}
