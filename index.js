const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./src/js/svg');
const { questions } = require('./src/js/prompts');

const promptQuestions = () => {
    return inquirer.prompt(questions);
};

async function main() {
    const answers = await promptQuestions();
    console.log(answers);

    const svg = createSVG(answers);

    fs.writeFile('examples/logo.svg', svg, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

main();