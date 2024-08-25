/*

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"



######### PREP:

PARAMS: we receive "text" as a string of letters.
RETURN: we must return a new string. This string contains number that refers to the alphabet position of the text[i] iterated.
EXAMPLE:
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
PSEUDOCODE:

--Make a dictionary for letters as key and numbers in crescendo as values.
--Create an empy array for final return.
--Iterate over text and check if text[i] formatted correctly its on the alphabetDictionary
--If true, push it into array.
--Return array joined by spaces.
*/

function alphabetPosition(text) {
    let finalString = [];

    const alphabetNumbers = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8,
        'I': 9,
        'J': 10,
        'K': 11,
        'L': 12,
        'M': 13,
        'N': 14,
        'O': 15,
        'P': 16,
        'Q': 17,
        'R': 18,
        'S': 19,
        'T': 20,
        'U': 21,
        'V': 22,
        'W': 23,
        'X': 24,
        'Y': 25,
        'Z': 26
    };


    for (let i = 0; i < text.length; i++) {

        let upperCaseLetter = text[i].toUpperCase();

        if (alphabetNumbers[upperCaseLetter]) {
            finalString.push(alphabetNumbers[upperCaseLetter])
        }
    }
    return finalString.join(' ')
}


