/**Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

CONDITIONS

Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
If the value is the same they both perish
If one of the values is empty(different array lengths) the non-empty value soldier survives.
To survive the defending side must have more survivors than the attacking side.
In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
The initial attack power is the sum of all the values in each array.
EXAMPLES

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
//0 survivors                4 survivors
//return true


attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
//1 survivors                3 survivors 
//return true */


function hasSurvived(attackers, defenders) {
  // Get the lengths of the attackers and defenders arrays
  const attLength = attackers.length;
  const defLength = defenders.length;

  // Handle different array lengths
  if (attLength === 0 || defLength === 0) {
    // If either of the arrays is empty, return true if defenders array is non-empty
    return defLength > attLength;
  }

  // Initialize counters for survivors on both sides
  let attCounter = 0;
  let defCounter = 0;

  // Loop through the arrays to compare the soldiers at each index
  for (let i = 0; i < Math.min(attLength, defLength); i++) {
    // Get the power of the soldier at the current index for both sides
    const attSoldier = attackers[i];
    const defSoldier = defenders[i];

    // Compare the power of the soldiers at this index
    if (attSoldier > defSoldier) {
      // Attacker wins at this index, increment the attacker's counter
      attCounter++;
    } else if (defSoldier > attSoldier) {
      // Defender wins at this index, increment the defender's counter
      defCounter++;
    }
    // If both powers are equal at this index, both perish, do nothing (else block is empty)
  }

  // Compare the number of survivors
  if (defCounter > attCounter) {
    // If defenders have more survivors, return true
    return true;
  } else if (defCounter < attCounter) {
    // If attackers have more survivors, return false
    return false;
  } else {
    // If the number of survivors is the same, consider the initial attack power as a tie-breaker

    // Calculate the initial attack power for both attackers and defenders
    const attInitialPower = attackers.reduce((sum, power) => sum + power, 0);
    const defInitialPower = defenders.reduce((sum, power) => sum + power, 0);

    // Compare the initial attack power
    return defInitialPower >= attInitialPower;
  }
}


//prep
//params: we receive two arrays of numbers INT. "attackers" & "defenders".
//return: we must return true if "defenders" survive the attack or false if not.
//example:
/*

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
//0 survivors                4 survivors
//return true


attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

*/
//Conditions:
/*
-Each soldier attacks the opposing soldier in the same index of the array. 
-The survivor is the number with the highest value.
-If the value is the same they both perish
-If one of the values is empty(different array lengths) the non-empty value soldier survives.
-To survive the defending side must have more survivors than the attacking side.
-In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. 
-If the total attack power of both sides is the same return true.
-The initial attack power is the sum of all the values in each array.
*/