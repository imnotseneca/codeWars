/**You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

 */


function search(budget, prices) {
    let coffeBeansWeCanAfford = [];
      if(budget === 0) {
        return ''
      }
      for(let i = 0; i < prices.length;i++) {
        if(budget >= prices[i]){
          coffeBeansWeCanAfford.push(prices[i])
        }
      }
      return coffeBeansWeCanAfford.sort((a,b) => a - b).join(',') 
    }
    
    //prep
    /*
    params: we receive two paramters.
    -"budget" is a number integer that represents the amount of money we have.
    -"prices" as an array of numbers that represents coffee bean prices.
    return: we must return a string of numbers sorted in ascending order that represent all the coffee bean prices we can afford.
    example:
    (3, [6, 1, 2, 9, 2]), "1,2,2")
    (14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14")
    (0, [6, 1, 2, 9, 2]), "") 
    pseudocode:
    -we declare a new variable "coffeBeansWeCanAfford" to store the final coffe bean prices, we initialize it as an empty array.
    -check if "budget" is 0 we return "".
    -iterate over prices and check if the element is leseer that budget.
    -if true push it to coffeBeansWeCanAfford
    -sort by ascending order coffeBeansWeCanAfford and join it as a string separated by comma.
    
    */