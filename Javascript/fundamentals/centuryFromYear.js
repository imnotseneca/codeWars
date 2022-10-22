//Century From Year
/*

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/
// Function declaration solution 

function century (years) {
    let centuried = years / 100
    if (centuried % 1 != 0) {
        centuried +=1   
    }
    return Math.floor(centuried)
}

// Or using arrow function

const century = years => Math.ceil(years/100)