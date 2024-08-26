/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

/PREP
PARAMS: we receive "str" as a string of letters.
RETURN: we must return a boolean depending if "str" is an isogram. True will mean that has no repeating letters, consecutive or non-consecutive.
EXAMPLE:
"Dermatoglyphics" --> true
"aba" --> false
PSEUDOCODE:
--We create an object that will contain the letters with true value.
--We transform str to lowerCase
--We iterate over str
--We check if the letter iterated is already in the object. If false, we push it, if true, we return false.
--if the loop ends, we return true.
*/


function isIsogram(str) {
    let lettersFromStr = {};
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (lettersFromStr[str[i]]) {
            return false
        } else {
            lettersFromStr[str[i]] = true;
        }
    }
    return true
}