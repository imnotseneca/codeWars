/**Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?" */

function ghostBusters(building) {
  let arrSplit = building.split("");
  let finalWord = "";

  for (let i = 0; i < arrSplit.length; i++) {
    if (arrSplit[i] === " ") {
      // Found a ghost, skip it
      continue;
    } else {
      // Non-whitespace character found
      finalWord += arrSplit[i];
    }
  }

  if (finalWord === building) {
    // No ghosts found
    return "You just wanted my autograph didn't you?";
  } else {
    // Ghosts found, return the modified string
    return finalWord;
  }
}
/*
  prep
  params: we receive "building" as a string of word
  
  return: if the word in "building" has whitespaces within, we should return the word without whitespaces, else return
  "You just wanted my autograph didn't you?"
  
  example:
  ghostBusters("Sky scra per") => "Skyscraper"
  ghostBusters("BusStation") => "You just wanted my autograph didn't you?"
  
  pseudocode:
  -create a variable "arrSplit" and split "building" into array.
  -if the word has spaces return it trimmed, else return the other word
  
  */
