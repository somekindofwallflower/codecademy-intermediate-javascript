console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
    it('', async function () {

        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }
        let orderSunglasses
        try {
            orderSunglasses = appModule.__get__("orderSunglasses");
        } catch (e) {
            expect(true, 'Did you create `orderSunglasses`?').to.equal(false);
        }
        expect(orderSunglasses, "`orderSunglasses()` should be a function.").to.be.an.instanceOf(Function);
				let myExecutor
        try {
            myExecutor = appModule.__get__("myExecutor");
        } catch (e) {
            expect(true, 'Did you accidentally delete your `myExecutor()` function?').to.equal(false);
        }      
      let inventory
        try {
            inventory = appModule.__get__("inventory");
        } catch (e) {
            expect(true, 'Did you accidentally delete the `inventory` object?').to.equal(false);
        }     
        
        let testPromise = await orderSunglasses();
      
        expect(testPromise==='Sunglasses order processed.', "`orderSunglasses()` should return a promise constructed with `new Promise(myExecutor)`.").to.equal(true);
    });
});