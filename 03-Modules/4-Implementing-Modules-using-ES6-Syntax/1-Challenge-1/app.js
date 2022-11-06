/* 
In this module you will find two functions which have been declared for you, changeText() and changeToFunkyColor() but currently, they aren’t being exported.

Using the named export syntax, export changeText() and changeToFunkyColor() from this module.
*/

function changeText(domElement, newText) {
    domElement.innerHTML = newText;
  }
   
  function changeToFunkyColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
   
    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
  }
   
  // export the functions here
  export { changeText, changeToFunkyColor }