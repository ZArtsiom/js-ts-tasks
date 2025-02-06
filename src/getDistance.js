/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const deltaX = secondPoint.X - firstPoint.X;
  const deltaY = secondPoint.Y - firstPoint.Y;

  // Calculate the distance using the distance formula and round to 2 decimal places
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  return parseFloat(distance.toFixed(2));
};
