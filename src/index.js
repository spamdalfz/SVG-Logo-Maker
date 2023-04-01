const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./svg');
const { questions } = require('./prompts');

const promptQuestions = () => {
    return inquirer.prompt(questions);
};

async function main() {
    const answers = await promptQuestions();
    console.log(answers);

    const svg = createSVG(answers);

    fs.writeFileSync('examples/logo.svg', svg.svg());
    console.log('Generated logo.svg');
}

main();