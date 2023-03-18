/*


Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"





PREP:
-PARAMETERS: we receive "name" as a string of names or letters that defines how we should call the neighbors 
-RETURN: we must return an array containing two elements only if "name" length is greater than 2. Two elements must be the complete name and a truncated version of two first letters. Else we return the string in the array as it is.
-EXAMPLE: ("Mexico"),["Mexico", "Me"]
("Me"),["Me"]
(""), [""]
*/

// const whoIsPaying =  name => {
//   if(name.length > 2) {
//     return [name, name.slice(0,2)]
//   } else {
//     return [name]
//     }
// }

const whoIsPaying = name => name.length > 2 ? [name, name.slice(0,2)] : [name]