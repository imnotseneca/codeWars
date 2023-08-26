/**This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab" */


function mergeStrings(str1, str2) {
    for (let i = Math.min(str1.length, str2.length); i > 0; i--) {
        if (str1.endsWith(str2.substring(0, i))) {
            return str1 + str2.substring(i);
        }
    }
    return str1 + str2;
}


//prep
/*
##params: we receive two parameters
-"first" as a string of words.
-"second" also a string of words.
##return:
-we must return a merge between "first" and "second".
-It should merge the end of the first string with the start of the second.
##example:
"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
##pseudocode:
-we're starting a loop that will iterate through possible lengths of overlapping substrings. 
-we use Math.min(str1.length, str2.length) to ensure that we don't check for longer substrings than the length of the shortest string. 
-the loop goes from this length down to 1.
-inside the loop, we're checking whether the end of str1 matches the beginning of str2 up to the current length i. 
-We do this by using the .endsWith() method on str1 and comparing it to a substring of str2 using .substring(0, i).
-if we find a matching overlap, we merge the two strings. 
-we take the portion of str2 after the overlapping substring (from index i onwards) and concatenate it to str1.
-If no match is found for the current length i
-the loop continues to check shorter lengths until it reaches 1.
-If no overlap is found, we simply concatenate the two input strings together.
*/
