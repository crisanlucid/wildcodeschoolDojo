var assert = require('assert');
var toCamelCase = require('./fizzBuzz.js');

describe('To Camel Case', function(){

    it('Should be loaded', function(){
        assert.equal(true, true);
    })

    xit('Should return fizz', function(){
        assert.equal("fizz", fizzBuzz(3));
    })

    xit('Should return fizz', function(){
        assert.equal("fizz", fizzBuzz(6));
        assert.equal("fizz", fizzBuzz(18));
    })

    xit('Should return buzz', function(){
        assert.equal("buzz", fizzBuzz(5));
    })

    xit('Should return buzz', function(){
        assert.equal("buzz", fizzBuzz(10));
        assert.equal("buzz", fizzBuzz(25));
    })

    xit('Should return fizzbuzz', function(){
        assert.equal("fizzbuzz", fizzBuzz(15));
    })

    xit('Should return fizzbuzz', function(){
        assert.equal("fizzbuzz", fizzBuzz(30));
        assert.equal("fizzbuzz", fizzBuzz(150));
    })

    xit('Should return 2', function(){
        assert.equal("2", fizzBuzz(2));
    })

    xit('Should return 8 and 52', function(){
        assert.equal("8", fizzBuzz(8));
        assert.equal("52", fizzBuzz(52));
    })
})
