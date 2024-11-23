/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n).toString();
  let Sum = 0;
  for (i = 0; i <= n.length - 1; i++) {
    Sum += Number(n[i]);
  }
  return Sum;
};
