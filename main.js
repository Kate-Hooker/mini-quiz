// prompt sync is an npm package that allows us to prompt the user for input. Terminal command "npm install prompt-sync"

const prompt = require('prompt-sync')()
let correctAnswers = 0

const answer1 = prompt('What is the brain of a computer? ')
const correct_answer1 = 'CPU'

if (answer1.toUpperCase() === correct_answer1) {
  console.log('Correct!')
  correctAnswers += 1
} else {
  console.log('Incorrect!')
}

const answer2 = prompt('What is the DOM?')
const correct_answer2 = 'DOCUMENT OBJECT MODEL'

if (answer2.toUpperCase() === correct_answer2) {
  console.log('Correct!')
  correctAnswers += 1
} else {
  console.log('Incorrect!')
}

const answer3 = prompt('What command initialises a git repository?')
const correct_answer3 = 'GIT INIT'

if (answer3.toUpperCase() === correct_answer3) {
  console.log('Correct!')
  correctAnswers += 1
} else {
  console.log('Incorrect!')
}

console.log(`You got ${correctAnswers} correct!`)
