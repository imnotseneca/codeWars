//PREP:
//PARAMETERS: we have "s", that is an array of strings.
//RETURN: we must return the first string word of the array after sort it alphabetically having "***" between every letter.
//EXAMPLE: ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )
//PSEUDOCODE:

function twoSort(s) {
    let sortedArr = s.sort()[0];
    return sortedArr.split('').join('***')

}

// const twoSort = s => s.sort()[0].split('').join('***')