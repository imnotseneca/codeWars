//PREP:
//PARAMTERS: we receive the string of words "words"
//RETURN: we must return a string with the same words but capitalize the first letter
//EXAMPLE: ('word'), 'Word'. ('glasswear'), 'Glasswear')

const capitalizeWord = word => word[0].toUpperCase() + word.slice(1)