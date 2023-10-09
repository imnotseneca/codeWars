/*Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

#Examples:

*Example 1*
SubstringTest("Something","Fun"); //Returns false

*Example 2*
SubstringTest("Something","Home"); //Returns true
In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)

#Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
We only count substrings that are > 1 in length.

#Input: Two strings with both lower and upper cases. #Output: A boolean value determining if there is a common substring between the two inputs.
*/

function SubstringTest(str1, str2) {
  
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    for (let i = 0; i < lowerStr1.length; i++) {
        for (let j = 2; j <= lowerStr1.length - i; j++) {
            const substring = lowerStr1.substring(i, i + j);

            if (lowerStr2.includes(substring)) {
                return true;
            }
        }
    }

    return false;
}

/*
params: we receive two params
--str1 is the first parameter, it will be a string word.
--str2 is the second parameter, it will be a string word.

return: we must return a boolean. True or false depeding if we found a match of common substrings with length >1  between 
str1 and str2

example:

SubstringTest("Something","Fun"); //Returns false

SubstringTest("Something","Home"); //Returns true for "me"

pseudocode:
-Convert both strings to lowercase
-Iterate through substrings
Check if the substring is present in the second string
*/
