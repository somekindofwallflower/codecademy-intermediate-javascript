console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
    it('', function () {

        let structureOne = function () {
            Promise.all(_)
                .then()

        };

        
        let isMatchOne = Structured.match(code, structureOne);


        assert.isOk((isMatchOne), "Did you chain `.then()` onto your `Promise.all()`?");
      
      let regTest = /\.then\s*\(\s*onFulfill\s*\)/.test(code)
        assert.isOk((regTest), "Did you pass the `onFulfill` function into `.then()` as the success handler? It should be the only argument to `.then()`. Make sure to pass it in uninvoked.");
    });
});