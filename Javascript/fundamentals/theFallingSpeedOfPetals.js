/**
 * 
 * When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

Notes:

The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
Pay attention to the data types.
If the initial velocity is non-positive, the return value should be 0
 */


//PREP
//PARAMETERS: we recive "v" as a number INTEGER which represent the centimeters per second speed a petal takes to reach the floor
//RETURN: we must return a number INTEGER that represents how much seconds it takes for the petal to reach the ground from certain branch.
//EXAMPLE: (5),80 / (10),40 / (-1),0
//PSEUDO-CODE:
// We calculate the distance to the floor by the data given 5 * 80 = 400 and store it in const
// We declare a "time" variable that's equals to "v" value.
// Declare conditions if "time" greater than 0 return its value after multiplying it by "cmToTheGround", else return 0;
const sakuraFall = v => {
    const cmToTheGround = 5 * 80;
    let time = v;
    if(time > 0) {
      return cmToTheGround / time
    } else {
      return 0
    }
  }