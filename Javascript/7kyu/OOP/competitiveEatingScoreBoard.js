/**
 * 
 * 
 * 
You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

Chickenwings: 5 points

Hamburgers: 3 points

Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
Happy judging!
 */

/*
#PARAMS: whoAteWhat is a list of objects
#RETURN: we must return a list of objects that has name and score from whoAteThat sorted by highest score or alphabetical if score are equals.
#EXAMPLE:

input ->   [
            {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
            {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
            
output ->
[
            {name: "Big Bob", score: 134},
            {name: "Habanero Hillary", score: 98}
]
#PSEUDOCODE:
-We create a finalArr variable to store the output.
-We iterate over whoAteThat element and make the sum from Chickenwings[5p], Hamburgers[3p], Hotdogs[2p]
-push name and score to finalArr.
-Sort by high score. If they are equal sort by name.
-Return finalArr


*/


function scoreboard(whoAteWhat) {
    const finalArr = [];

    for (let i = 0; i < whoAteWhat.length; i++) {
        const chickenwingsUnities = Number(whoAteWhat[i].chickenwings);
        const hamburgersUnities = Number(whoAteWhat[i].hamburgers);
        const hotdogsUnities = Number(whoAteWhat[i].hotdogs);
        const nameOfThePerson = whoAteWhat[i].name
        const finalScore = (5 * chickenwingsUnities) + (3 * hamburgersUnities) + (2 * hotdogsUnities)
        finalArr.push({ name: nameOfThePerson, score: finalScore })
    }
    finalArr.sort((a, b) => {
        if (b.score === a.score) {
            return a.name.localeCompare(b.name); // localeCompare is used to compare two strings alphabetically.
        }
        return b.score - a.score; // Sort by score (higher score first)
    });

    return finalArr;
    // your code here..
}