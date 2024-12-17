/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  S = 0;
  start > end ? start : end;
  for (i = Number(start < end ? start : end); i <= Number(start > end ? start : end); i++) {
    S += i;
  }
  return S;
};
