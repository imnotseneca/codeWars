/*
  
  @param {Ahoy Matey!

Welcome to the seven seas.

You are the captain of a pirate ship.

You are in battle against the royal navy.

You have cannons at the ready.... or are they?

Your task is to check if the gunners are loaded and ready, if they are: Fire!

If they aren't ready: Shiver me timbers!

Your gunners for each test case are 2, 3 or 4.

When you check if they are ready their answers are in a dictionary and will either be: aye or nay

Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!} gunners 

 */


//PREP:
//PARAMETERS: we receive  "gunners" that is an object who contains different name properties with values that can be either "aye" or "nay"
//RETURN: we must return a string "Fire!" if all the key values are "aye", else if there is at least 1 key value that is not "aye" we must return string value "Shiver me timbers!"
//EXAMPLE: gunners = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}; -> 'Fire!'
//gunners = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'}; -> 'Shiver me timbers!'
//PSEUDO CODE:
//Iterate through "gunners" object and check property values.
//Make a condition after it that returns "Fire!" or "Shiver me timbers!" when its needed.

const cannonsReady = (gunners) => {
    let result = Object.values(gunners)
    for(let i = 0; i < result.length; i++) {
      if(result.includes('nay')) {
        return 'Shiver me timbers!'
      } else return "Fire!"
    }
  }