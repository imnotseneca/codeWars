/*


Description: John is really excited about coffee. He wrote some text messages earlier, but he's worried that they didn't convey his enthusiasm for coffee, so he's decided to resend them with coffee in all-caps:

COFFEE

Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

Input: string. The word "coffee" may occur more than once. It may have some capital letters or already be in all-caps. There may be punctuation in the string too. It will not be part of another word like "Coffeeburger", which isn't a word anyway.

Output: string with all instances of coffee in all-caps:

Examples:

Input: "Did I only have two cups of coffee this morning? I need more." Output: "Did I only have two cups of COFFEE this morning? I need more."

Input: "Coffee! Buy me a COFFEE!" Output: "COFFEE! Buy me a COFFEE!"

Good luck!

*/

/*
PREP
#PARAMS: we receive "str" as a string of letters.
#RETURN: "str" but with all "coffee" instances all capped.
#EXAMPLE:
Input: "Did I only have two cups of coffee this morning? I need more."
Output: "Did I only have two cups of COFFEE this morning? I need more."
#PSEUDOCODE:
-create a finalArr variable that holds str.split('')
-loop over finalArr
-validate if element iterated includes "coffee"
-if true make it all cap
-return str with all coffee instances mayus

*/



function coffee(str) {
    const finalArr = str.split(' ');

    for (let i = 0; i < finalArr.length; i++) {
        const characterLowerCase = String(finalArr[i].toLowerCase());

        if (characterLowerCase.includes('coffee')) {
            finalArr[i] = finalArr[i].toUpperCase();
        }

    }
    return finalArr.join(' ')
}