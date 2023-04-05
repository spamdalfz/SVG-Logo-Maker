const circle = (color) => {
  const radius = 200 / 2;
  return `
    <circle cx="150" cy="100" r="${radius}" fill="${color}" />
  `;
};

const triangle = (color) => `
  <polygon points="150,0 300,200 0,200" fill="${color}" />
`;

const square = (color) => `
  <rect x="0" y="0" width="300" height="200" fill="${color}" />
`;

module.exports = { circle, triangle, square };
