const SVG = require('@svgdotjs/svg.js');
const { circle, triangle, square } = require('./shapes');
const svgWidth = 300;
const svgHeight = 200;

const createSVG = (answers) => {
    const svg = SVG(svgWidth, svgHeight);

    const shapeSize = Math.min(svgWidth, svgHeight) / 2;

    const shape = { circle, triangle, square }[answers.shape](shapeSize, answers.shapeColor);
    shape.center(svgWidth / 2, svgHeight / 2);
    svg.add(shape);

    const text = SVG('<text>').text(answers.text).fill(answers.textColor).font({ size: shapeSize / 3 }).center(svgWidth / 2, svgHeight / 2);
    svg.add(text);

    return svg;
};

module.exports = { createSVG };
