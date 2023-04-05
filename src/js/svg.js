const { circle, triangle, square } = require('./shapes');

const createSVG = (answers) => {
  const { shape, shapeColor, text, textColor } = answers;

  let shapeElement;
  if (shape === 'circle') {
    shapeElement = circle(shapeColor);
  } else if (shape === 'triangle') {
    shapeElement = triangle(100, shapeColor);
  } else {
    shapeElement = square(100, shapeColor);
  }

  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svg;
};

module.exports = { createSVG };
