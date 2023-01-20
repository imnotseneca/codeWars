// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//PREP
/*
-PARAMETERS: we got "words" as an array of strings.
-RETURN: we must return a string with the words inside "words" joined
-EXAMPLE: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*/

function smash (words) {
    return words.join(' ')
 };