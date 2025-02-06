/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let timeoutId;
  let firstCall = true;
  return function (...args) {
    if (firstCall) {
      fn.apply(this, args);
      firstCall = false;
      timeoutId = setTimeout(() => {
        firstCall = true;
      }, delay);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        firstCall = true;
      }, delay);
    }
  };
};
