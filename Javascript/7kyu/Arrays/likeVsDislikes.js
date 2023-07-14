/*
Story
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.


*/

// Like, Dislike, Nothing come from Preloaded
//PREP
//PARAMETERS: we receive "buttons" as an array that can hold different states: Like || Dislike || Nothing
//RETURN: we must return the final state after iterate through "buttons".
//EXAMPLE: 
/*
[Dislike], Dislike
[Dislike,Dislike]), Nothing
[Like,Like,Like]), Like
[Like,Dislike]), Dislike
[Dislike,Like,Dislike]), Dislike
[], Nothing

//PSEUDOCODIGO:
-Define a state variable for button state, initial value "nothing".
-Make a for loop for buttons array.
-Make conditions to check array element and current state, change currentState based on result.

*/



function likeOrDislike(buttons) {
    let currentState = "Nothing";
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === "Like" && currentState === "Nothing") {
        currentState = "Like";
      } else if (buttons[i] === "Dislike" && currentState === "Nothing") {
        currentState = "Dislike";
      } else if (buttons[i] === "Like" && currentState === "Dislike") {
        currentState = "Like";
      } else if (buttons[i] === "Dislike" && currentState === "Like") {
        currentState = "Dislike";
      } else if (buttons[i] === "Like" && currentState === "Like") {
        currentState = "Nothing";
      } else if (buttons[i] === "Dislike" && currentState === "Dislike") {
        currentState = "Nothing";
      }
    }
  
    return currentState;
  }
  


  //one liner

  const likeOrDislike = buttons => buttons.reduce((state, button) => button === state ? Nothing : button, Nothing)