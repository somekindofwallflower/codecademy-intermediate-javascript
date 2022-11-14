console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
    it('', function () {

        let structureOne = function () {
            checkInventory(order)
                .then((resolvedValueArray) => {
                    return processPayment(resolvedValueArray);
                })
                .then((resolvedValueArray) => {
                    return shipOrder(resolvedValueArray);
                })
                .then((successMessage) => {
                    console.log(successMessage);
                });

        };


        let isMatchOne = Structured.match(code, structureOne);

        assert.isOk(isMatchOne, "Instead of nesting `.then()'s` we should have a chain of `.then()`'s each with its own anonymous function as a success handler. The first should return `processPayment(resolvedValueArray)`, the second should return `shipOrder(resolvedValueArray)` and the third should log `successMessage` to the console.");
    });
});