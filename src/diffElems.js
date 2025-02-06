/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const uniqueElements = new Set(arr);

  // The size of the Set represents the number of distinct elements
  return uniqueElements.size;
};
