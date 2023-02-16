/*

You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).


//PREP
-Parameters: we have "name" as a string of names. and "price" that represents a number integer set default to "30".
-Return: we must return the "price" it will cost to publish "name", every letter on "name" adds +30 to "price"
-Example:
"Jeong-Ho Aristotelis", 600
"Abishai Charalampos", 570
"Idwal Augustin", 420

*/

function billboard(name, price = 30){
  let totalCost = 0;
for(let i = 0; i < name.length; i++) {

  totalCost += price
}

return totalCost

} 

//Using High Order Functions

const billboard = (name, price = 30) => [...new Array(name.length)].fill(price).reduce((prev, curr) => prev + curr)