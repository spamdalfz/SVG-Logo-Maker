// Imports the shapes module, which exports Circle, Triangle, and Square classes
const { Circle, Triangle, Square } = require('./shapes');

// Creates an object that maps shape names to their corresponding class definitions
const shapeClasses = {
  circle: Circle,
  triangle: Triangle,
  square: Square,
};

// Defines a function that takes an object of answers and returns an SVG string
const createSVG = (answers) => {
  // Extract the shape name, shape color, text, and text color from the answers object
  const { shape, shapeColor, text, textColor } = answers;

  // Look up the class definition for the selected shape using the shapeClasses object
  const ShapeClass = shapeClasses[shape];

  // Create an instance of the selected shape class with the specified color
  const shapeInstance = new ShapeClass(shapeColor);

  // Get the SVG element string for the shape instance
  const shapeElement = shapeInstance.getSVGElement();

  // Construct an SVG string that includes the shape element and the specified text
  const svg = `
    <svg width="${shapeInstance.width}" height="${shapeInstance.height}" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="${shapeInstance.width / 2}" y="${shapeInstance.height / 2}" font-size="60" text-anchor="middle" dominant-baseline="central" fill="${textColor}">${text}</text>
    </svg>
  `;
  return svg;
};

module.exports = { createSVG };
