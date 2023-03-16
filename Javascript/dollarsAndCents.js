/**
 * The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!

-PREP: 
-PARAMETERS:  we receive "amount" as a number integer.
-RETURN: we must return a string transformed with "$" on front and decimal "0" if needed.
-EXAMPLE: 3 needs to become $3.00

3.1 needs to become $3.10
 */


const formatMoney = amount => `$${amount.toFixed(2)}`


//The toFixed() method formats a number using fixed-point notation.

//Syntax
// toFixed()
// toFixed(digits)

//digits Optional
// The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.