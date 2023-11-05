var length = 10;
var width = 5;

// Function Declaration
function areaRectangle(length, width) {
    return length * width;
  }
  console.log(`The area of the rectangle is ${areaRectangle(length, width)}cm2`);

// Function Expression
let rectangleArea = function(length, width) {
    return length * width;
  }
  console.log(`The area of the rectangle is ${rectangleArea(length, width)}cm2`);