/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxSequence = [];
  let currentSequence = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] === arr[i - 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
      }
      currentSequence = [arr[i]];
    }
  }

  // Final check in case the longest sequence is at the end
  if (currentSequence.length > maxSequence.length) {
    maxSequence = currentSequence;
  }

  return maxSequence;
};
