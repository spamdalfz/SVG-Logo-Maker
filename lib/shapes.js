const SVG = require('@svgdotjs/svg.js');

const circle = (size, color) => SVG('<circle>').radius(size).fill(color);

const triangle = (size, color) => SVG('<polygon>').plot(`0,0 ${size},0 ${size / 2},${size}`).fill(color);

const square = (size, color) => SVG('<rect>').size(size, size).fill(color);

module.exports = { circle, triangle, square };
