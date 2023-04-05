// Import the shape classes from the shapes module
const { Circle, Triangle, Square } = require('../src/js/shapes');

// Test suite for the Circle class
describe('Circle', () => {
    it('should render a string for the corresponding SVG file with the given shape color', () => {

        // Create a new Circle instance with the specified color, width, and height
        const circle = new Circle('blue', 300, 200);

        // Get the SVG element string from the Circle instance
        const svgElement = circle.getSVGElement();

        // Define the expected output using a template literal
        const expectedOutput = `<circle cx="${circle.width / 2}" cy="${circle.height / 2}" r="${circle.radius}" fill="${circle.color}" />`;

        // Assert that the actual output matches the expected output
        expect(svgElement).toBe(expectedOutput);
    });
});

// Test suite for the Triangle class
describe('Triangle', () => {
    it('should render a string for the corresponding SVG file with the given shape color', () => {

        // Create a new Triangle instance with the specified color, width, and height
        const triangle = new Triangle('blue', 300, 200);

        // Get the SVG element string from the Triangle instance
        const svgElement = triangle.getSVGElement();

        // Define the expected output using a template literal
        const expectedOutput = `<polygon points="${triangle.width / 2},0 ${triangle.width},${triangle.height} 0,${triangle.height}" fill="${triangle.color}" />`;

        // Assert that the actual output matches the expected output
        expect(svgElement).toBe(expectedOutput);
    });
});

// Test suite for the Square class
describe('Square', () => {
    it('should render a string for the corresponding SVG file with the given shape color', () => {

        // Create a new Square instance with the specified color, width, and height
        const square = new Square('blue', 300, 200);

        // Get the SVG element string from the Square instance
        const svgElement = square.getSVGElement();

        // Define the expected output using a template literal
        const expectedOutput = `<rect x="0" y="0" width="${square.width}" height="${square.height}" fill="${square.color}" />`;

        // Assert that the actual output matches the expected output
        expect(svgElement).toBe(expectedOutput);
    });
});
