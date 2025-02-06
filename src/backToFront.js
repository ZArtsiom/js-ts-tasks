/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount <= str.length) {
    str1 = str.slice(str.length - symbolsCount, str.length);
    str2 = str1 + str + str1;
  } else {
    str2 = str;
  }
  return str2;
};
