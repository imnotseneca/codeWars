/*

Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

*/

/*

--Parameters: str (string), the input string for which we want to count the number of consonants.
--Return: the number of consonants (integer) in the input string.
--Example:
const result = consonantCount("Hello World");
console.log(result); // Output: 7

--Pseudocode:
1. Initialize an array called `vowel` with the vowel letters: ['a', 'e', 'i', 'o', 'u'].
2. Initialize a variable called `count` to 0 to keep track of the number of consonants.
3. Iterate through each character, `char`, in the input string, `str`.
    - Convert `char` to lowercase and store it in a variable called `lowerCase`.
    - Check if `lowerCase` is an alphabetic letter using regex `lowerCase.match(/[a-z]/)`.
    - If `lowerCase` is an alphabetic letter and not present in the `vowel` array using `!vowel.includes(lowerCase)`, then:
        - Increment `count` by 1.
4. Return the value of `count` as the result.

*/


//Data structure -> array

function consonantCount(str) {
    const vowel = ['a','e','i','o','u']
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      const lowerCase = str[i].toLowerCase()
      if(lowerCase.match(/[a-z]/) && !vowel.includes(lowerCase)) {
        count++
      }
    }
    return count
  }

/*Data structure Set ->

//We change the way we store the "vowels" and the "has" function to check if "lowerCase" is not in "vowel"

function consonantCount(str) {
    const vowel = new Set(['a','e','i','o','u'])
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        const lowerCase = str[i].toLowerCase()
        if(lowerCase.match(/[a-z]/) && !vowel.has(lowerCase)) {
          count++
        }
      }
      return count
}


//Data structure Hashmap ->

//In this version, the vowels object acts as a hashmap, associating each vowel with a value of true. 
//During the consonant check, we use the !vowels[lowercaseChar] condition to verify that the lowercaseChar is not present in the vowels hashmap.

function consonantCount(str) {
    const vowel = {
        a:true,
        e:true,
        i:true,
        o:true,
        u:true,
    }
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        const lowerCase = str[i].toLowerCase()
        if(lowerCase.match(/[a-z]/) && !vowel[lowerCase]) {
          count++
        }
      }
      return count
}
*/