/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  return Number(firstNumber.toString().split(' ').join('')) + Number(secondNumber.toString().split(' ').join(''));
};