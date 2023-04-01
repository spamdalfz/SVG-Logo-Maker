const questions = [
    {
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

module.exports = { questions };