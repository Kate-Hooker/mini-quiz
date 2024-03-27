// prompt sync is an npm package that allows us to prompt the user for input. Terminal command "npm install prompt-sync"

const prompt = require('prompt-sync')()

const answer1 = prompt('What is the brain of a computer? ')
const correct_answer1 = 'CPU'

if (answer1.toUpperCase() === correct_answer1) {
  console.log('Correct!')
} else {
  console.log('Incorrect!')
}
