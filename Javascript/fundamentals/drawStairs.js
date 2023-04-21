/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

/*
PREP
PARAMETERS: we receive "n" as an INTEGER that represent how tall and wide our stair is.
RETURN: we must return blank spaces related to the number of stair step we are in followed by an "I".
EXAMPLE:
n = 3 result in:

"I\n I\n  I" --> 

I
 I
  I
  

*/
//We use Array constructor and the map over it repeating spaces over the index, then concat the "I" and join it into a string
const drawStairs = (n) => [...Array(n)].map((_,index) => ' '.repeat(index) + 'I').join('\n')


//Another readable solution
function drawStairs (n) {
    let stair = [];

    for(let i = 0; i < n; i++) {
        stair[i] = `${' '.repeat(i)}I`
    }
    
    return stair.join('\n')
}