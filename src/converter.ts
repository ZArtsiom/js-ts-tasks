/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let convertedValue: number;

  switch (from) {
    case 'C':
      if (to === 'K') {
        convertedValue = value + 273.15;
      } else if (to === 'F') {
        convertedValue = (value * 9) / 5 + 32;
      } else {
        throw new Error('Invalid conversion');
      }
      break;

    case 'K':
      if (to === 'C') {
        convertedValue = value - 273.15;
      } else if (to === 'F') {
        convertedValue = ((value - 273.15) * 9) / 5 + 32;
      } else {
        throw new Error('Invalid conversion');
      }
      break;

    case 'm':
      if (to === 'mi') {
        convertedValue = value / 1609.34;
      } else {
        throw new Error('Invalid conversion');
      }
      break;

    case 'mi':
      if (to === 'm') {
        convertedValue = value * 1609.344;
      } else {
        throw new Error('Invalid conversion');
      }
      break;

    case 'gr':
      if (to === 'pound') {
        convertedValue = value / 453.592;
      } else {
        throw new Error('Invalid conversion');
      }
      break;

    case 'pound':
      if (to === 'gr') {
        convertedValue = value * 453.592;
      } else {
        throw new Error('Invalid conversion');
      }
      break;

    default:
      throw new Error('Invalid unit type');
  }

  return parseFloat(convertedValue.toFixed(2));
};
