const logs = [];
console.log = (val) => {logs.push(val)} 
const { expect } = require('chai')
const rewire = require('rewire');
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }
        let handleFailure
        try {
            handleFailure = appModule.__get__("handleFailure");
        } catch (e) {
            expect(true, 'Did you create `handleFailure()`?').to.equal(false);
        }
        expect(handleFailure, "`handleFailure()` should be a function.").to.be.an.instanceOf(Function);
        
      handleFailure('cat')
        expect(logs[logs.length-1]==='cat', "Your `handleFailure()` function should log to the console the value passed into it.").to.equal(true);
    });
});