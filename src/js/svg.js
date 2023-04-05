const { Circle, Triangle, Square } = require('./shapes');

const shapeClasses = {
  circle: Circle,
  triangle: Triangle,
  square: Square,
};

const createSVG = (answers) => {
  const { shape, shapeColor, text, textColor } = answers;

  const ShapeClass = shapeClasses[shape];
  const shapeInstance = new ShapeClass(shapeColor);

  const shapeElement = shapeInstance.getSVGElement();

  const svg = `
    <svg width="${shapeInstance.width}" height="${shapeInstance.height}" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="${shapeInstance.width / 2}" y="${shapeInstance.height / 2}" font-size="60" text-anchor="middle" dominant-baseline="central" fill="${textColor}">${text}</text>
    </svg>
  `;
  return svg;
};

module.exports = { createSVG };
