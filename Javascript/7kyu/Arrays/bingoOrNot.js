/**
 * For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
 */


function bingo(a) {
    const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
    const letterToNumber = {};
    const encounteredLetters = new Set();
  
    // Create a mapping between letters and numbers
    for (let i = 0; i < bingoLetters.length; i++) {
      const letter = bingoLetters[i];
      const number = i + 1;
      letterToNumber[letter] = number;
    }
  
    for (const num of a) {
      const letter = String.fromCharCode(64 + num); // Convert number to letter
      if (letterToNumber[letter]) {
        encounteredLetters.add(letter);
      }
    }
  
    // Check if all BINGO letters are present
    const allLettersPresent = bingoLetters.every((letter) => encounteredLetters.has(letter));
  
    return allLettersPresent ? "WIN" : "LOSE";
  }
  //prep
  //params: we receive "a" as an array of numb INT
  //return: "WIN" if all required letters for "BINGO" are present, otherwise "LOSE".
  //example:
  /*
  Test.assertEquals( bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
  Test.assertEquals( bingo([21,13,2,7,5,14,7,15,9,10]), "WIN");
  //pseudocode:
  
  // 1. Create an array containing the required letters for "BINGO" in their correct order: bingoLetters = ['B', 'I', 'N', 'G', 'O'].
  
  // 2. Create an empty object to store the mapping between letters and their corresponding alphabetical order numbers: letterToNumber = {}.
  
  // 3. Create an empty Set to keep track of the unique letters encountered in the input array: encounteredLetters = new Set().
  
  // 4. Populate the letterToNumber object with the mapping between letters and their corresponding alphabetical order numbers (1 to 26).
  
  // 5. Loop through each number in the numbersArray:
  //   a. Convert the number to its corresponding letter using String.fromCharCode(64 + num).
  //   b. If the letter is found in the letterToNumber object, add it to the encounteredLetters Set.
  
  // 6. Check if all the required letters for "BINGO" are present in the encounteredLetters Set:
  //   a. Use the every method to check each letter in the bingoLetters array.
  //   b. Use the has method of the encounteredLetters Set to verify if the letter is present.
  //   c. If all the letters are present, set allLettersPresent to true; otherwise, set it to false.
  
  // 7. Return "WIN" if allLettersPresent is true; otherwise, return "LOSE".
  
  */
  