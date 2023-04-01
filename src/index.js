const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('@svgdotjs/svg.js');
const { circle, triangle, square } = require('../src/js/shapes');
const svgWidth = 300;
const svgHeight = 200;

const promptQuestions = () => {
    const questions = [{
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3 || 'Please enter up to three characters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex):',
    }
    ];
    return inquirer.prompt(questions);
};
async function main() {
    const answers = await promptQuestions();
    console.log(answers);

    const svg = SVG(svgWidth, svgHeight);

    const shapeSize = Math.min(svgWidth, svgHeight) / 2;

    const shape = { circle, triangle, square }[answers.shape](shapeSize, answers.shapeColor);
    shape.center(svgWidth / 2, svgHeight / 2);
    svg.add(shape);

    const text = SVG('<text>').text(answers.text).fill(answers.textColor).font({ size: shapeSize / 3 }).center(svgWidth / 2, svgHeight / 2);
    svg.add(text);

    fs.writeFileSync('examples/logo.svg', svg.svg());
    console.log('Generated logo.svg');
}

main();