### ES6 Modules Challenge #4

Consider the following functions being exported from the modules square-area.js and circle-area.js:

```
/* From square-area.js... */
export function area(side) {
  return side * side;
}
 
/* From circle-area.js... */
export function area(radius) {
  return Math.PI * radius * radius;
}
```
The file below, area-calculator.js, is programmed to print the area of a square and a circle to the console using these functions. However, because the exported values share the same name, they need to be renamed when they are imported! Fill in the code blanks below with the correct syntax for renaming these functions.


```
/* area-calculator.js */
 
import { area as squareArea } from 'square-area.js';
import { area as circleArea } from 'circle-area.js';
 
console.log('The area of a square with sides of length 5 is ' + squareArea(5));
console.log('The area of a circle with radius of length 5 is ' + circleArea(5));

```
