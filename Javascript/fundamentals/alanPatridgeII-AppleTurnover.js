/*


Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).


//PREP:
//PARAMETERS: we receive "x" that could be either a string of a number, or just a number integer.
//RETURN: we must return the string "It's hotter than the sun!!" if x squared is greater than 1000, else return "Help yourself to a honeycomb Yorkie for the glovebox."
//EXAMPLE: (apple('50'), 'It\'s hotter than the sun!!'); 
(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 

*/

function apple(x){
    return Math.pow(Number(x),2) > 1000 ? `It's hotter than the sun!!` : 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }