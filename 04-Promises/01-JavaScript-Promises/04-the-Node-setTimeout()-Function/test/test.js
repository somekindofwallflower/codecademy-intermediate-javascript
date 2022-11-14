console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');
const rewire = require('rewire');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
  it('', function() {
    let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            //expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
          expect(true, `${e}`).to.equal(false);
        }
        let usingSTO
        try {
            usingSTO = appModule.__get__("usingSTO");
        } catch (e) {
            expect(true, 'Did you delete the `usingSTO` function?').to.equal(false);
        }
    
    let structureOne = function() {
      setTimeout($func, $num);
    };

    let varCallbacks = [
      function($func, $num){
        if($func.name !== 'usingSTO'){
          return {failure: 'Did you pass `usingSTO()` uninvoked as the first argument in your `setTimeout()` call?'}
          //return {failure: `${$func.name}`}
        }
        
        let valTest = ($num.value>=0)&&($num.value<=3000)
        if(!valTest){
        return {failure: 'Did you pass a number between `0` and `3000` as the second argument in your `setTimeout()` call?'}
          //return {failure: `${$num.value}`}
      }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    assert.isOk(isMatchOne, varCallbacks.failure || 'Did you call `setTimeout()`?');
  });
});
