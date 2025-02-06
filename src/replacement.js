/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  return arr.map(num => {
    // Get the absolute value of the number to handle negative numbers
    const absNum = Math.abs(num);

    // Convert the absolute number to a string to count digits
    const numDigits = absNum.toString().length;

    // Replace based on the number of digits
    if (numDigits === 1) return 1;
    if (numDigits === 2) return 2;
    if (numDigits === 3) return 3;
    return 4; // For numbers with more than 3 digits
  });
};
