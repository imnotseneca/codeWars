//PREP
//Parameteres: "players" as an array of player objects. "goose" as an index of positive integers.
//Return: the name of the player object that correspond to "goose".
//Examples: duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
//Pseudo code:

const duckDuckGoose = (players, goose) => players[(goose -1) % players.length].name