// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain:  i tested the comman, length shows the amount of total values in the string or array.
console.log(cohort.length)

// --------------------2) What will this log?

const greeting = "Hello World!"
//  console.log(greeting[4])

// a) Your answer:  0
// b) Verify and explain: it shows o because it is the 4th index in the string.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: it shows ruby because ruby is at the 1st index given in the const. if you changed the const value the index position would change.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"] console.log(weekendDays.toUpperCase())

// a) Your answer: you would get an error, toUpperCase is not a function.
// b) Verify and explain: you get an error because the const is assigned to be an array instead of a string. i tested it as a string and it works fine.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: it gives the output of number because typeof specifies the type of the const dataTypes.length, i had to look up typeof since we didnt really talk much about it to fully understand this one.
