// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
// sumOfABeach("cItYTowNcARShoW")               ==>  0


function sumOfABeach(beach) {
  const lowerCased = beach.toLowerCase();
  const countSand = (lowerCased.match(/sand/g) || []).length;
  const countWater = (lowerCased.match(/water/g) || []).length;
  const countFish = (lowerCased.match(/fish/g) || []).length;
  const countSun = (lowerCased.match(/sun/g) || []).length;

  return countSand + countWater + countFish + countSun;
}


//prep:
//params: we receive "beach" as a string of words.
//return: 
/*
-we must return a number int that represents how many times the words "sand", "water", "fish" or "sun" appears
-counting only 1 time per word.
*/
//example:
/*
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0
*/
//pseudocode:
/*
-first we pass beach into lowerCase.
-We declare variables for each word that will match a regex
-the variable will also need a nullish coalescing operator with "|| []" cause match() returns null if any
-we return the sum of all the varaibles
*/