/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
  return function (...arguments) {
    for (let i = 0; i <= arguments.length - 1; i++) {
      for (let j = 0; j <= arguments.length - i - 2; j++) {
        if (TestUtils.sortComparator(arguments[j], arguments[j + 1]) > 0) {
          bucket = arguments[j];
          arguments[j] = arguments[j + 1];
          arguments[j + 1] = bucket;
        }
      }
    }
    console.log(arguments);
    return arguments;
  };
};
