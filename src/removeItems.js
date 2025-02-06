/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  return arr.filter(item => {
    // Handle primitive values directly (numbers, strings, etc.)
    if (typeof item !== 'object' || item === null) {
      return item !== value;
    }

    // Handle case where both item and value are objects
    if (typeof value === 'object' && typeof item === 'object') {
      // Deep comparison for objects (by checking all properties)
      const keys1 = Object.keys(item);
      const keys2 = Object.keys(value);

      if (keys1.length !== keys2.length) return true; // Different number of properties

      for (let key of keys1) {
        if (item[key] !== value[key]) return true; // Different property values
      }

      return false; // If both objects are the same, return false to remove it
    }

    return true; // Keep other cases
  });
};
