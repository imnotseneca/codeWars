/**
 * Task
Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.

Worked Example
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False
Examples
("i found an ounce with my hound", "o", "u") ➞ True

("we found your dynamite", "d", "y") ➞ False
Notes
All sentences will be given in lowercase.
 */

function bestFriend(txt, a, b) {
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] === a) {
        if (i === txt.length - 1 || txt[i + 1] !== b) {
          return false; // If a is not followed by b or it's the last character
        }
      }
    }
    return true; // If all occurrences of a are followed by b
  }
  
  /*
  PREP
  PARAMS: we receive three parameters.
  1. "txt" as a string text with some text. 
  2. "a" as the first letter to match occurrence.
  3. "b" as the second letter to match occurrence.
  RETURN: we must return a boolean value. return true if every time there's an "a" exist a "b" afterwards. else ret false.
  EXAMPLE:
  ("i found an ounce with my hound", "o", "u") ➞ True
  
  ("we found your dynamite", "d", "y") ➞ False
  PSEUDOCODE:
  
  Iterate through each character in the input string txt.
  For each character c in txt, check if it is equal to the first letter a.
  If c is equal to a, check if it's the last character in txt. If so, return false because a cannot be followed by b if it's the last character.
  If c is not the last character, check if the next character after c is equal to the second letter b. If not, return false because a must be followed by b.
  If all occurrences of a are followed by b, return true at the end of the loop.
  
  */