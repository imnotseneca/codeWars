/**Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1
Notes
Return a positive number.
All tests will only include the words "right" and "left". */

function spinAround(turns) {
    let totalAngles = 0;
    for(let i = 0; i < turns.length; i++) {
      if(turns[i] === "right") {
        totalAngles += 90
      } else {
        totalAngles -= 90
      }
    }
  
    const completeRotations = Math.floor(Math.abs(totalAngles) / 360)
  
    return completeRotations
  }
  
  /*
  parms: we receive "turns" as an array of strings that indicates spinning directions
  return: we must return a number integer that indicates how many spins (whole 360°) in one direction.
  examples:
  ["right", "right", "right", "right", "left", "right"] ➞ 1
  # You spun right 4 times (90 * 4 = 360)
  # You spun left once (360 - 90 = 270)
  # But you spun right once more to make a full rotation (270 + 90 = 360)
  ["left", "right", "left", "right"] ➞ 0
  
  ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2
  
  ["left", "left", "left", "left"] ➞ 1
  
  pseudocode:
  -we create a new variable called "totalAngles" and initialize it to 0.
  -we iterate over "turns" and check if element it's right or left.
  -if its right we sum 90 to "totalAngles"
  -if its left we decrease in 90 "totalAngles"
  -After iteration, we check the total value of totalAngles.
  -we declare "completeRotations" variable that will hold the value of totalAngles / 360 and floor rounded to the nearest number.
  -we return completeRotations
  
  */