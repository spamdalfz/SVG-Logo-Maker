const { Circle, Triangle, Square } = require('../src/js/shapes');

describe('Circle', () => {
    it('should render a string for the corresponding SVG file with the given shape color', () => {
        const circle = new Circle('blue', 300, 200);
        const svgElement = circle.getSVGElement();

        const expectedOutput = `<circle cx="${circle.width / 2}" cy="${circle.height / 2}" r="${circle.radius}" fill="${circle.color}" />`;

        expect(svgElement).toBe(expectedOutput);
    });
});

describe('Triangle', () => {
    it('should render a string for the corresponding SVG file with the given shape color', () => {
        const triangle = new Triangle('blue', 300, 200);
        const svgElement = triangle.getSVGElement();

        const expectedOutput = `<polygon points="${triangle.width / 2},0 ${triangle.width},${triangle.height} 0,${triangle.height}" fill="${triangle.color}" />`;

        expect(svgElement).toBe(expectedOutput);
    });
});


describe('Square', () => {
    it('should render a string for the corresponding SVG file with the given shape color', () => {
        const square = new Square('blue', 300, 200);
        const svgElement = square.getSVGElement();

        const expectedOutput = `<rect x="0" y="0" width="${square.width}" height="${square.height}" fill="${square.color}" />`;

        expect(svgElement).toBe(expectedOutput);
    });
});
