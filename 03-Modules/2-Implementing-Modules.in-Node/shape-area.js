/* Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:

circleArea(radiusLength).
squareArea(sideLength).
You may create these as either named functions or anonymous function expressions.*/

/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below

module.exports.circleArea = function(radiusLength) {
  return PI * radiusLength ** 2;
}

module.exports.squareArea = function (sideLength) {
  return sideLength ** 2;
}



