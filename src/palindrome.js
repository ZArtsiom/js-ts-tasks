/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  return function (input) {
    // Convert all uppercase letters to lowercase
    let cleanedStr = input.toLowerCase();

    // Remove all non-alphanumeric characters
    cleanedStr = cleanedStr.replace(/[^A-Za-z0-9]/g, '');
    // Debug: Print cleaned string
    let string = {
      str: cleanedStr,
    };
    // Call isPalindrome function from TestUtils object
    return TestUtils.isPalindrome.call(string);
  }; // remove this line and create your solution
};
