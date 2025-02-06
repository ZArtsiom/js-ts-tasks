/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let date: Date;
  if (typeof targetDate === 'string') {
    const parts = targetDate.split('.');
    const day = parseInt(parts[0]!, 10);
    const month = parseInt(parts[1]!, 10) - 1;
    const year = parseInt(parts[2]!, 10);

    date = new Date(year, month, day);
  } else {
    date = targetDate;
  }

  const targetNewYear = new Date(2024, 0, 1);

  const diffInTime = targetNewYear.getTime() - date.getTime();
  const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

  return diffInDays;
};
