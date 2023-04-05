const questions = [
    {
        // Prompt the user to enter up to three characters
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3 || 'Please enter up to three characters'
    },
    {
        // Prompt the user to enter the text color
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex):',
        // Validate the input to ensure it's a valid CSS color value
        validate: input => {
            if (!input) {
                return 'Please enter a value';
            }
            // Use a regular expression to check if the input is a valid CSS color format
            const colorRegex = /^(#([\da-fA-F]{3}){1,2}|[\w\s]+)$/i;
            if (colorRegex.test(input)) {
                return true;
            }
            return 'Please enter a valid color value';
        }
    },
    {
        // Prompt the user to choose a shape
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex):',
        // Validate the input to ensure it's a valid CSS color value
        validate: input => {
            if (!input) {
                return 'Please enter a value';
            }
            // Use a regular expression to check if the input is a valid CSS color format
            const colorRegex = /^(#([\da-fA-F]{3}){1,2}|[\w\s]+)$/i;
            if (colorRegex.test(input)) {
                return true;
            }
            return 'Please enter a valid color value';
        }
    }
];

module.exports = { questions };