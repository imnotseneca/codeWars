/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//PREP:
-PARAMTERS: we get "beast" as a string of words that describes animals name, and we get "dish" that must be a string of words of food.
-RETURN: we must return "true" if the "dish" first and last letter are equals to "beast" first and last letter.
-Example: ("great blue heron", "garlic naan") -> true, ("chickadee", "chocolate cake") -> true, ("brown bear", "bear claw") '> false
*/

const feast = (beast, dish) => beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true : false


function feast(beast, dish) {
    if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)) {return true
                                                                                                          } return false
   }