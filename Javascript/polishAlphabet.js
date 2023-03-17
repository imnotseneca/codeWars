/**
 * 
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

 */

function correctPolishLetters(string) {
    let newArr = string.split('')
    for(let i = 0; i < newArr.length; i++) {
        switch(newArr[i]) {
            case "ą":
                newArr[i] = 'a'
            break;
                        case "ć":
                newArr[i] = 'c'
            break;
                        case "ę":
                newArr[i] = 'e'
            break;
                        case "ł":
                newArr[i] = 'l'
            break;
                        case "ń":
                newArr[i] = 'n'
            break;
                        case "ó":
                newArr[i] = 'o'
            break;
                        case "ś":
                newArr[i] = 's'
            break;
                        case "ą":
                newArr[i] = 'a'
            break;
                        case "ź":
                newArr[i] = 'z'
            break;
                        case "ż":
                newArr[i] = 'z'
            break;
        }
    }
  return newArr.join('')
}

let polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

const correctPolishLetters = string => string.split('').map(letter => polishLetters[letter] || letter).join('')