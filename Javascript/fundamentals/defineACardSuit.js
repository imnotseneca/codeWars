/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

PREP:
-Parameters: we receive "card" as a string of word and symbols representing poker cards
-Return: we must return a string representing the suit of the card.
-Example:

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'


*/


function defineSuit(card) {
    if(card.includes('♣')) {
      return 'clubs'
    
  } else if(card.includes('♦')) {

      return 'diamonds'

  } else if(card.includes('♥')) {

      return 'hearts'
    
  } else {
      return 'spades'
  }
}