// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


//PREP
//Parameters: we have the "games" parameter which represent an array filled with 10 strings that contains "x:y", "x" is string number that represent our team's score, "y" represent our opponets score.
//Return: we must return an integer that could be 0 or greater than zero.
//Examples: if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
//["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30.

function points(games) {
    let points = 0;
  
    // Loop through each match(string)
    for (let game of games) {
      // Split the match into x and y
      let [x, y] = game.split(":").map(Number);
  
      // Add points based on the rules
      if (x > y) {
        points += 3;
      } else if (x < y) {
        points += 0;
      } else {
        points += 1;
      }
    }
  
    return points;
  }