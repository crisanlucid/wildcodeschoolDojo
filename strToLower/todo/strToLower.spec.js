'use strict';

let assert = require('assert'),
    strTolower = require('strToLower');

describe('str to lower', () => {

    it('should be loaded', () => {
        assert.equal(true, true);
    });

    xit('should return a', () => {
        assert.equal(strTolower('A'), 'a');
    });

    xit('should return ab', () => {
        assert.equal(strTolower('AB'), 'ab');
    });

    xit('should return ab', () => {
        assert.equal(strTolower('aB'), 'ab');
    });

    xit('should return a+b', () => {
        assert.equal(strTolower('A+B'), 'a+b');
    });

    xit('should return je suis le test ultime', () => {
        assert.equal(strTolower('UltImate TesT'), 'ultimate test');
    });


});
