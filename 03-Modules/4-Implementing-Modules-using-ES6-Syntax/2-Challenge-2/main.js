/*
You are building a simple webpage that makes use of the module module.js. This module declares and exports two functions whose signatures are listed below:

1- ChangeText(domElement, newText): changes the text of the provided domElement to the provided newText.
2- ChangeToFunkyColor(domElement): changes the color of the provided domElement to a random color.

You will be editing the file main.js. Complete the tasks below:

1- Import changeText and changeToFunkyColor from ./module.js using the named import syntax.
2- Call changeText() to change the text of the element stored in the header variable to "I did it!".
3- Within the callback passed to setInterval, call changeToFunkyColor() passing in the element stored in the header variable.

Note: Upon completing this challenge, the text will change to “I did it!” and will be set to change color every 0.2 seconds.
*/

// import the functions here, then uncomment the code below
import {changeText, changeToFunkyColor} from './modules.js'

const header = document.getElementById("header");

// call changeText here
changeText(header, 'I did it!')
setInterval(()=> {
  changeToFunkyColor(header);
}, 200);