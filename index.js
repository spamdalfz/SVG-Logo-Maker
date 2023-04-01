const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('@svgdotjs/svg.js');
const shapes = require('./shapes.js');
const chalk = require('chalk');

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