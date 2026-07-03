// Math utilities
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
}

function angle(x1, y1, x2, y2) {
  return Math.atan2(y2-y1, x2-x1);
}

module.exports = { distance, angle };