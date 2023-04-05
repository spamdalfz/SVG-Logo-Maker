// Import the fs and inquirer modules and the createSVG and questions variables from other files
const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./js/svg');
const { questions } = require('./js/prompts');

// Defines a function that prompts the user with questions from the questions array
const promptQuestions = () => {
    return inquirer.prompt(questions);
};

// Define an async function called 'main' that prompts the user for answers, generates an SVG string,
// and writes it to a file named logo.svg in the examples directory
async function main() {
    // Prompt the user for answers to the questions
    const answers = await promptQuestions();

    // Log the answers to the console for debugging purposes
    console.log(answers);

    // Generate an SVG string using the createSVG function and the user's answers
    const svg = createSVG(answers);

    // Write the SVG string to a file named logo.svg in the examples directory
    fs.writeFile('examples/logo.svg', svg, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

// Call the main function to start the program
main();