import {default as updateHeader} from './modules.js'

const {changeText, changeToFunkyColor} = updateHeader;

const header = document.getElementById("header");

// call changeText here
changeText(header, 'I did it!')
setInterval(()=> {
  changeToFunkyColor(header);
}, 200);