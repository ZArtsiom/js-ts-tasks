/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError('Argument must be an array'));
    }

    let results = [];
    let completed = 0;
    let total = promisesArray.length;

    if (total === 0) {
      return resolve([]);
    }

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise) // Ensures non-promise values are wrapped in a resolved promise
        .then(value => {
          results[index] = value;
          completed++;
          if (completed === total) {
            resolve(results);
          }
        })
        .catch(error => reject(error));
    });
  });
};
