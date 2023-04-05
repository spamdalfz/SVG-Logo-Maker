const questions = [
    {
        // Prompt the user to enter up to three characters
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        // Validate that the input is no longer than three characters
        validate: input => input.length <= 3 || 'Please enter up to three characters'
    },
    {
        // Prompt the user to enter the text color
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex):',
    },
    {
        // Prompt the user to choose a shape
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        // Prompt the user to enter the shape color
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex):',
    }
];

module.exports = { questions };