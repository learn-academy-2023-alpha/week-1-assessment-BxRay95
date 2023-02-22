// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: i created the const temp for a reference to log. i created the variable number for the input. 

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3  = 212
// Expected output: "212 is at boiling point"

const temp = (num) => {
        if (num < 212) {
            return `${num} is below boiling point`
    }   else if (num > 212) {
            return `${num} is above boiling point`
    }   else  {
            return `${num} is at boiling point`
    }
}

console.log(temp(212));

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: I created the variable for the new combined array padresArray, and then used the concat feature to combine them. then to display the length i used .length in the console log

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

var padresArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(padresArray.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: i logged the commands for reversing the string.

const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"

console.log("Alpha 2023".split("").reverse().join(""))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: I ran the command for finding the last index of the given value 42 and got 7. the 2nd time i got 8.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
console.log(myNumbers.lastIndexOf(42));

const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(10));

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: i used the sort command to get the given values in numerical order(i didnt know it would work for numbers like it does letters, sick.)

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(sanDiegoSummerTemperatures.sort().reverse())
console.log(sanDiegoWinterTemperatures.sort().reverse())