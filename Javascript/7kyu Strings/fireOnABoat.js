//PREP
//PARAMETERS: we receive "s" as a long string that contains elements on a boat separated by " ".
//RETURN: we must return the string with the element "fire" replaced for "~~".
//EXAMPLE: 
// ("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast" => "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
//("Mast Deck Engine Water Fire") => "Mast Deck Engine Water ~~"
//PSEUDOCODIGO:
//we split words into array.
//We iterate trough and try to find word "fire" if true change it for ~~

// One Line solution
//const fireFight = s => s.split(' ').map((x) => x === "Fire" ? x = "~~" : x).join(' ')


//Using array methods.
function fireFight(s){
    let sArr = s.split(' ');
    let mappedArr = sArr.map((x) => x === "Fire" ? x = "~~" : x)
    return mappedArr.join(' ')
  }