//PREP
// PARAMETERS: we receive "heads" and "legs" as numbers integers, can be positive or negative.
// RETURN: we must return an array that contains two integer elements that repreesnts how many [chickens, cows] exist based on the given parameters
// EXAMPLE:  (72, 200), [44, 28] , (116, 282), [91, 25]
// PSEUDO CODE:
// heads = chickens + cows

// therefore -> chickens = heads - cows

// legs = 2chickens + 4 cows.
//      = 2(heads - cows) + 4 cows
//      = 2heads - 2cows + 4cows
//      = 2heads + 2 cows

// therefore -> 2cows = legs - 2heads
// therefore -> cows = legs / 2 - heads 

function animals(heads, legs){
    const cows = legs / 2 - heads
    const chicken = heads - cows
    return /\.|-/g.test(`${chicken}${cows}`) ? 'No solutions' : [chicken, cows]
    //Here I use RegEx to check if the int have . or -, if so it returns "no solutions" else returns the array with proper numbers of animals.
  }