const circle = (size, color) => `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${color}" />`;

const triangle = (size, color) => {
    const halfSize = size / 2;
    return `
    <polygon points="${halfSize},0 ${size},${size} 0,${size}" fill="${color}" />
  `;
};

const square = (size, color) => `<rect x="0" y="0" width="${size}" height="${size}" fill="${color}" />`;

module.exports = { circle, triangle, square };
