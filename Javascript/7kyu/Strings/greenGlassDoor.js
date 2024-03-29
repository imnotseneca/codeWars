/*

Step through my green glass door.

You can take the moon, but not the sun.

You can take your slippers, but not your sandals.

You can go through yelling, but not shouting.

You can't run through fast, but you can run with speed.

You can take a sheet, but not your blanket.

You can wear your glasses, but not your contacts.

Have you figured it out? Good! Then write a program that can figure it out as well.

 */


//PREP:
//PARAMETERS: we receive "s" as an string word.
//RETURN: we must return "true" if "s" contains a word with a repeated letter, else false.
//EXAMPLE: ("moon"), true / ("test"), false
//PSEUDOCODE: 
//we gonna iterate through "s" with a for loop
//we make an if condition to check if the adjacent letters are equal, if yes return true, if not end the loop and return false

function stepThroughWith(s) {
    for(let i = 1; i < s.length; i++) {
      if (s[i-1] === s[i]) return true; 
    }
    return false;
  }