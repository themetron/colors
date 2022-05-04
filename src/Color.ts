const colorConvert = require('color-convert');

// Optional "#", followed by either 3 or 6 characters A-F or
// 0-9 (case insensitive)
const hexPattern = new RegExp('^#?([a-f0-9]{3}|[a-f0-9]{6})$', 'i');

const validateHex = (hex) => {
  if (!hexPattern.test(hex)) throw new Error(`"${hex}" is not a valid hex color`);
};

const getCleanHex = (rawHex) => {
  validateHex(rawHex);
  let hex = rawHex[0] === '#' ? rawHex.substr(1) : rawHex;

  hex = hex.length === 3
    ? [...hex].reduce((result, char) => result + char + char, '')
    : hex;

  hex = hex.toLowerCase();
  hex = `#${hex}`;
  return hex;
};

class Color extends String {
  static getHexFromHexOrName(color) {
    try {
      return getCleanHex(colorConvert.keyword.hex(color.toLowerCase()));
    } catch(e) {
      try {
        return getCleanHex(color);
      } catch(e2) {
        throw new Error(`"${color}" is not a valid hex color or CSS color name.`);
      }
    }
  }

  constructor(c) {
    super(Color.getHexFromHexOrName(c));
  }

  toEqual(color) {
    return color.valueOf() === this.valueOf();
  }
}

export default Color;
